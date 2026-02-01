import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

/**
 * Multi-account GitHub GraphQL fetcher
 * - Supports multiple usernames via GITHUB_USERNAMES="user1,user2"
 * - Uses one token via GITHUB_TOKEN
 * - Merges output into the same JSON files your portfolio expects
 */

const OUTPUT_DIR = "./src/shared/opensource";

const token = process.env.GITHUB_TOKEN;
const usernamesRaw = process.env.GITHUB_USERNAMES || process.env.GITHUB_USERNAME;

if (!usernamesRaw) {
  throw new Error(
    "Missing GITHUB_USERNAMES (preferred) or GITHUB_USERNAME in .env"
  );
}

const usernames = usernamesRaw
  .split(",")
  .map((u) => u.trim())
  .filter(Boolean);

if (!token) {
  console.warn(
    "Warning: GITHUB_TOKEN is not set. Requests may be rate-limited by GitHub. Add a token for reliability."
  );
}

const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  ...(token ? { Authorization: "bearer " + token } : {}),
};

function ensureDir(path) {
  if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
}

async function gqlRequest(queryObj) {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(queryObj),
  });
  const txt = await res.text();
  const json = JSON.parse(txt);

  if (json.errors) {
    throw new Error("GitHub GraphQL error: " + JSON.stringify(json.errors));
  }
  return json.data;
}

// ----- Queries (parameterized by username) -----

const queryPullRequests = (username) => ({
  query: `
    query {
      user(login: "${username}") {
        pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            id
            title
            url
            state
            createdAt
            number
            changedFiles
            additions
            deletions
            mergedBy {
              avatarUrl
              url
              login
            }
            baseRepository {
              name
              url
              owner {
                avatarUrl
                login
                url
              }
            }
          }
        }
      }
    }
  `,
});

const queryIssues = (username) => ({
  query: `
    query {
      user(login: "${username}") {
        issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            id
            closed
            title
            createdAt
            url
            number
            assignees(first: 100) {
              nodes {
                avatarUrl
                name
                url
              }
            }
            repository {
              name
              url
              owner {
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  `,
});

const queryContributedOrgs = (username) => ({
  query: `
    query {
      user(login: "${username}") {
        repositoriesContributedTo(last: 100) {
          totalCount
          nodes {
            owner {
              login
              avatarUrl
              __typename
              url
            }
          }
        }
      }
    }
  `,
});

const queryPinnedProjects = (username) => ({
  query: `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          totalCount
          nodes {
            ... on Repository {
              id
              name
              createdAt
              url
              description
              isFork
              languages(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
});

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
};

// ----- Helpers to merge + dedupe -----

function dedupeByKey(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const it of items) {
    const k = keyFn(it);
    if (!k) continue;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(it);
  }
  return out;
}

function writeJson(path, obj) {
  fs.writeFileSync(path, JSON.stringify(obj, null, 2));
}

// ----- Fetchers per user -----

async function fetchPRsForUser(username) {
  const data = await gqlRequest(queryPullRequests(username));
  const nodes = data?.user?.pullRequests?.nodes || [];
  const prNodes = nodes.map((n) => ({ ...n, sourceUser: username }));

  let open = 0,
    closed = 0,
    merged = 0;
  for (const pr of prNodes) {
    if (pr.state === "OPEN") open++;
    else if (pr.state === "MERGED") merged++;
    else closed++;
  }

  return { nodes: prNodes, open, closed, merged, totalCount: prNodes.length };
}

async function fetchIssuesForUser(username) {
  const data = await gqlRequest(queryIssues(username));
  const nodes = data?.user?.issues?.nodes || [];
  const issueNodes = nodes.map((n) => ({ ...n, sourceUser: username }));

  let open = 0,
    closed = 0;
  for (const issue of issueNodes) {
    if (issue.closed === false) open++;
    else closed++;
  }

  return { nodes: issueNodes, open, closed, totalCount: issueNodes.length };
}

async function fetchOrgsForUser(username) {
  const data = await gqlRequest(queryContributedOrgs(username));
  const repos = data?.user?.repositoriesContributedTo?.nodes || [];

  // Extract unique org owners for this user
  const owners = repos
    .map((r) => r?.owner)
    .filter(Boolean)
    .filter((o) => o.__typename === "Organization")
    .map((o) => ({ ...o, sourceUser: username }));

  // Dedupe by org login
  return dedupeByKey(owners, (o) => o.login);
}

async function fetchPinnedForUser(username) {
  const data = await gqlRequest(queryPinnedProjects(username));
  const projects = data?.user?.pinnedItems?.nodes || [];

  const normalized = projects.map((p) => {
    const langNodes = p?.languages?.nodes || [];
    const newLangobjs = [];
    for (const l of langNodes) {
      if (l.name in languages_icons) {
        newLangobjs.push({
          name: l.name,
          iconifyClass: languages_icons[l.name],
        });
      }
    }
    return {
      ...p,
      languages: newLangobjs,
      sourceUser: username,
    };
  });

  return normalized;
}

// ----- Main run -----

async function main() {
  ensureDir(OUTPUT_DIR);

  console.log(`Fetching GitHub data for: ${usernames.join(", ")}`);

  // Collect across users
  const allPRs = [];
  const allIssues = [];
  const allOrgs = [];
  const allPinned = [];

  let prOpen = 0,
    prClosed = 0,
    prMerged = 0;

  let issueOpen = 0,
    issueClosed = 0;

  for (const username of usernames) {
    // PRs
    console.log(`\n[${username}] Pull Requests...`);
    const prs = await fetchPRsForUser(username);
    allPRs.push(...prs.nodes);
    prOpen += prs.open;
    prClosed += prs.closed;
    prMerged += prs.merged;

    // Issues
    console.log(`[${username}] Issues...`);
    const issues = await fetchIssuesForUser(username);
    allIssues.push(...issues.nodes);
    issueOpen += issues.open;
    issueClosed += issues.closed;

    // Orgs
    console.log(`[${username}] Organizations...`);
    const orgs = await fetchOrgsForUser(username);
    allOrgs.push(...orgs);

    // Pinned
    console.log(`[${username}] Pinned Projects...`);
    const pinned = await fetchPinnedForUser(username);
    allPinned.push(...pinned);
  }

  // Merge + dedupe
  const mergedPRs = dedupeByKey(allPRs, (p) => p.url);
  const mergedIssues = dedupeByKey(allIssues, (i) => i.url);
  const mergedOrgs = dedupeByKey(allOrgs, (o) => o.login);
  const mergedPinned = dedupeByKey(allPinned, (p) => p.url);

  // Build output objects to match your existing JSON schema
  const prOut = {
    data: mergedPRs,
    open: prOpen,
    closed: prClosed,
    merged: prMerged,
    totalCount: mergedPRs.length,
    users: usernames,
  };

  const issueOut = {
    data: mergedIssues,
    open: issueOpen,
    closed: issueClosed,
    totalCount: mergedIssues.length,
    users: usernames,
  };

  const orgOut = { data: mergedOrgs, users: usernames };

  const pinnedOut = { data: mergedPinned, users: usernames };

  // Write files
  writeJson(`${OUTPUT_DIR}/pull_requests.json`, prOut);
  writeJson(`${OUTPUT_DIR}/issues.json`, issueOut);
  writeJson(`${OUTPUT_DIR}/organizations.json`, orgOut);
  writeJson(`${OUTPUT_DIR}/projects.json`, pinnedOut);

  console.log("\nDone. Wrote merged GitHub data to:");
  console.log(`- ${OUTPUT_DIR}/pull_requests.json`);
  console.log(`- ${OUTPUT_DIR}/issues.json`);
  console.log(`- ${OUTPUT_DIR}/organizations.json`);
  console.log(`- ${OUTPUT_DIR}/projects.json`);
}

main().catch((e) => {
  console.error("Error:", e.message || e);
  process.exit(1);
});
