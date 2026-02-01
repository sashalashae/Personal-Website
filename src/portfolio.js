/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sasha's Portfolio",
  description:
  "A data first AI security engineer designing end to end systems that are secure, observable, and scalable by design.",
  og: {
    title: "Sasha Morgan Portfolio",
    type: "website",
    url: "http://sashamorgan.com/",
  },
};

//Home Page
const greeting = {
  title: "Sasha Morgan",
  logo_name: "Sasha Morgan",
  nickname: "AI Security Engineer & PhD Student at UVA",
  subTitle:
    "A data first AI security engineer designing end to end systems that are secure, observable, and scalable by design.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/sashalashae/sashamorgan.github.io",
  githubProfile: "https://github.com/sashalashae",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Sasha1919",
  // linkedin: "https://www.linkedin.com/in/Sasha-Morgan-88710b138/",
  // gmail: "SashaMorgan98@gmail.com",
  // gitlab: "https://gitlab.com/SashaMorgan98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Sasha_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sashalashae",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sasha-morgan-3a890a10a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/SashaMorgan-l7b",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sasha@sashamorgan.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/thesashamo",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  //{
  //  name: "Facebook",
  //  link: "https://www.facebook.com/laymanbrother.19/",
  //  fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //  backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
 // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/thesashamo",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI Security & Agentic Systems",
      fileName: "SafeImg",
      skills: [
        "⚡ Designing and building agentic AI systems with explicit control, observability, and safety constraints",
        "⚡ Engineering threat detection and forensic observability for LLM- and tool-augmented agents",
        "⚡ Evaluating agent behavior, tool use, and memory flows in real operational environments",
      ],
      softwareSkills: [
        { skillName: "Model Context Protocol (MCP)", imageSrc: "mcp.png", style: { color: "#2F3642" } },
        { skillName: "CrewAI", imageSrc: "crewai-color.png", style: { color: "#000000" } },
        { skillName: "LangChain", imageSrc: "langchain-color.png", style: { color: "#0B5FFF" } },
        { skillName: "Langfuse", imageSrc: "langfuse-color.png", style: { color: "#632CA6" } },
        { skillName: "OpenAI / LLM APIs", fontAwesomeClassname: "simple-icons:openai", style: { color: "#000000" } },
        { skillName: "Gemini", imageSrc: "gemini-color.png", style: { color: "#000000" } },
        { skillName: "Huggingface", imageSrc: "huggingface-color.png", style: { color: "#000000" } },
        { skillName: "Claude", imageSrc: "claude-color.png", style: { color: "#000000" } },
        { skillName: "Ollama", imageSrc: "ollama.png", style: { color: "#000000" } },

      ],
    },

    {
      title: "Data Engineering, Ontologies & Standards",
      fileName: "DataEngImg",
      skills: [
        "⚡ Architecting canonical data models and standardized integration patterns across complex systems",
        "⚡ Applying ontologies and knowledge graphs to improve interoperability, provenance, and robustness",
        "⚡ Using standards-driven data engineering as the foundation for secure and auditable AI systems",
      ],
      softwareSkills: [
        { skillName: "OAGI / OAGIS", imageSrc: "logo_blue_dot_web_430x.avif", style: { color: "#6E6E6E" } },
        { skillName: "NIST (SCORE)", imageSrc: "connectSpec_for_blog_with_margin.png", style: { color: "#1A2B49" } },
        { skillName: "Knowledge Graphs", fontAwesomeClassname: "simple-icons:neo4j", style: { color: "#4581C3" } },
        { skillName: "SPARQL / RDF", fontAwesomeClassname: "simple-icons:w3c", style: { color: "#005A9C" } },
        { skillName: "IBM Cloud Pak for Data", fontAwesomeClassname: "simple-icons:ibm", style: { color: "#1F70C1" } },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        }, 
        
      ],
    },

    {
      title: "AI, Machine Learning & Deep Learning",
      fileName: "AndroidImg",
      skills: [
        "⚡ Designing and training machine learning models for structured and unstructured data",
        "⚡ Applying deep learning techniques with an emphasis on evaluation, robustness, and deployment",
        "⚡ Integrating ML models into production systems with governance and monitoring in mind",
      ],
      softwareSkills: [
        { skillName: "PyTorch", fontAwesomeClassname: "simple-icons:pytorch", style: { color: "#EE4C2C" } },
        { skillName: "TensorFlow", fontAwesomeClassname: "simple-icons:tensorflow", style: { color: "#FF6F00" } },
        { skillName: "scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn", style: { color: "#F7931E" } },
        { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "OpenAI / LLM APIs", fontAwesomeClassname: "simple-icons:openai", style: { color: "#000000" } },
        { skillName: "Gemini", imageSrc: "gemini-color.png", style: { color: "#000000" } },
        { skillName: "Huggingface", imageSrc: "huggingface-color.png", style: { color: "#000000" } },
        { skillName: "Claude", imageSrc: "claude-color.png", style: { color: "#000000" } },
        { skillName: "Ollama", imageSrc: "ollama.png", style: { color: "#000000" } },

      ],
    },

    {
      title: "Secure MLOps & DevSecOps",
      fileName: "ServerImg",
      skills: [
        "⚡ Building secure CI/CD pipelines and Kubernetes deployments for AI/ML and agentic workloads",
        "⚡ Embedding monitoring, provenance, and policy enforcement into AI delivery pipelines",
        "⚡ Supporting reproducible, auditable, and resilient AI systems in production",
      ],
      softwareSkills: [
        { skillName: "OpenShift", fontAwesomeClassname: "simple-icons:redhatopenshift", style: { color: "#EE0000" } },
        { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
        { skillName: "GitHub Actions", fontAwesomeClassname: "simple-icons:githubactions", style: { color: "#2088FF" } },
        { skillName: "Terraform", fontAwesomeClassname: "simple-icons:terraform", style: { color: "#7B42BC" } },
      ],
    },

    {
      title: "Software Engineering",
      fileName: "ApplicationImg",
      skills: [
        "⚡ Building production-grade software in Python, Java, C++, and C#",
        "⚡ Developing automation, integration services, and platform tooling",
        "⚡ Applying secure coding, testing discipline, and maintainable architectures",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        { skillName: "Java", fontAwesomeClassname: "logos-java", style: {} },
        { skillName: "C++", fontAwesomeClassname: "simple-icons:cplusplus", style: { color: "#00599C" } },
        { skillName: "C#", fontAwesomeClassname: "simple-icons:csharp", style: { color: "#512BD4" } },
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#F05032" } },
        { skillName: "Bugbounty", imageSrc: "hackerone_logo_icon_170042.png", style: { color: "#3776AB" } },

      ],
    },
    {
  title: "Entrepreneurship & Business Systems",
  fileName: "EntImg",
  skills: [
    "⚡ Founder of By Sasha Lasha'e — handcrafted goods and licensed collegiate merchandise, built and operated end-to-end",
    "⚡ Grant-awarded business: FedEx Entrepreneur Fund (2026), United Way Alliance Grant (2025), Verizon Digital Ready (2025), Etsy Creative Boost (2024)",
    "⚡ Operating systems: product development, inventory, vendor events, fulfillment, customer experience, and growth experiments",
  ],
  softwareSkills: [
    {
      skillName: "Shopify",
      fontAwesomeClassname: "simple-icons:shopify",
      style: { color: "#7AB55C" },
    },
    {
      skillName: "SEO & Analytics",
      fontAwesomeClassname: "simple-icons:googleanalytics",
      style: { color: "#E37400" },
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "simple-icons:canva",
      style: { color: "#00C4CC" },
    },
    {
      skillName: "Marketing Automation",
      fontAwesomeClassname: "simple-icons:zapier",
      style: { color: "#FF4A00" },
    },
    {
      skillName: "Content Strategy",
      fontAwesomeClassname: "simple-icons:buffer",
      style: { color: "#2F3642" },
    },
        {
      skillName: "LightBurn",
      fontAwesomeClassname: "simple-icons:autodesk",
      style: { color: "#2F3642" },
    },
    {
      skillName: "Etsy",
      fontAwesomeClassname: "simple-icons:etsy",
      style: { color: "#F1641E" },
    },
    {
      skillName: "Pinterest Marketing",
      fontAwesomeClassname: "simple-icons:pinterest",
      style: { color: "#E60023" },
    },
  ],
}

  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "DataCamp",
      iconifyClassname: "simple-icons:datacamp",
      style: { color: "#03EF62" },
      profileLink: "https://www.datacamp.com/portfolio/sashalmorgan",
    },
    {
      siteName: "HackerOne",
      iconifyClassname: "simple-icons:hackerone",
      style: { color: "#494649" },
      profileLink: "https://hackerone.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: { color: "#2EC866" },
      profileLink: "https://www.hackerrank.com/profile/smorgcybsec",
    },
    {
      siteName: "Credly",
      iconifyClassname: "simple-icons:credly",
      style: { color: "#FF6A00" },
      profileLink: "https://www.credly.com/users/sasha-morgan.80a6ceaa",
    },
  ],
};



const degrees = {
  degrees: [
    {
      title: "University of Virginia",
      subtitle: "Ph.D. in Computer Science",
      logo_path: "uva_logo.svg",
      alt_name: "UVA",
      duration: "Aug 2025 - Present",
      descriptions: [
        "⚡ Research focus: AI security with emphasis on LLM threat detection, agent/AI forensic observability, and secure MLOps architectures.",
        "⚡ Investigating how LLMs are used in Security Operations Centers (SOC) across roles and skill levels to identify gaps in tooling and operations.",
        "⚡ Building security-first observability approaches for agentic systems—tool-use tracing, causality, and forensic reconstructability.",
        "⚡ Translating research into deployable systems: provenance-aware logging, evaluation harnesses, and data-first security instrumentation.",
      ],
      website_link: "https://www.virginia.edu/",
    },
    {
      title: "New York University",
      subtitle: "M.S. in Cyber Security",
      logo_path: "nyu_logo.png",
      alt_name: "NYU",
      duration: "May 2021",
      descriptions: [
        "⚡ Graduate training in cyber security and applied security engineering.",
        "⚡ Awarded the NYU Cyber Security Fellowship (2019–2021).",
        "⚡ Strengthened foundations across defensive security, risk thinking, and security engineering approaches used in production environments.",
      ],
      website_link: "https://www.nyu.edu/",
    },
    {
      title: "Virginia Tech",
      subtitle: "B.S. in Computer Engineering (Minor: Cyber Security)",
      logo_path: "vt_logo.png",
      alt_name: "Virginia Tech",
      duration: "May 2019",
      descriptions: [
        "⚡ Undergraduate research: quantum computing (D-Wave architecture, QUBO formulation) and security systems vulnerability research; presented at the Virginia Tech National Security Symposium (2018, 2019).",
        "⚡ Led and represented engineering programs through major leadership roles: ECE Department Ambassador President and College of Engineering Dean’s Team (2017–2019).",
        "⚡ Built embedded/autonomous systems as part of an Embedded Software Design Team (autonomous Tic-Tac-Toe robot with sensing and control).",
        "⚡ Recognitions: Computer Engineering Leadership Award; multiple Women in Cyber Security (WiCyS) scholarships; Facebook Grace Hopper Celebration scholarship.",
      ],
      website_link: "https://www.vt.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AI MLOps National Standards Apprenticeship",
      subtitle: "U.S. Department of Labor",
      logo_path: "us_dol_logo.webp",
      certificate_link: "",
      alt_name: "US DOL",
      color_code: "#0A2E57",
    },
    {
      title: "AI Fundamentals Practitioner Badge",
      subtitle: "Lockheed Martin / Credly",
      logo_path: "ai-fundamentals-practitioner-badge.1.png",
      certificate_link: "https://www.credly.com/badges/ff00a66c-7293-41d8-8718-814ed9785bab/public_url",
      alt_name: "Credly",
      color_code: "#1F70C1",
    },
    {
      title: "AI Fundamentals Skills Badge",
      subtitle: "Lockheed Martin / Credly",
      logo_path: "ai-fundamentals-skills-badge.1.png",
      certificate_link: "https://www.credly.com/badges/ff00a66c-7293-41d8-8718-814ed9785bab/public_url",
      alt_name: "Credly",
      color_code: "#1F70C1",
    },
    {
      title: "ML Ops Skills Badge",
      subtitle: "Lockheed Martin / Credly",
      logo_path: "mlops-skills-badge.1.png",
      certificate_link: "https://www.credly.com/badges/a731056b-3dfa-4323-9128-b21cd4040ebe/public_url",
      alt_name: "Credly",
      color_code: "#1F70C1",
    },
    {
      title: "NSA-CAE Cyber Defense",
      subtitle: "National Security Agency",
      logo_path: "nsa_logo.svg",
      certificate_link: "",
      alt_name: "NSA",
      color_code: "#00000099",
    },
    {
      title: "CITI RCR + IRB Training",
      subtitle: "CITI Program",
      logo_path: "citi_logo.jpeg",
      certificate_link: "https://www.citiprogram.org/verify/?w7a895f96-edf5-4229-ad6e-a6049a453aa0-71375337",
      alt_name: "CITI",
      color_code: "#2F3642",
    },
        {
      title: "CITI Basic RCR",
      subtitle: "CITI Program",
      logo_path: "citi_logo.jpeg",
      certificate_link: "https://www.citiprogram.org/verify/?w88c1c368-6b94-4f50-987d-6d088796354e-71291750",
      alt_name: "CITI",
      color_code: "#2F3642",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Industry, Research, Standards, and Entrepreneurship",
  description:
    "Engineering secure, scalable data and AI systems across industry and research—plus building a product-based business grounded in design, fabrication, and customer experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Data Engineer (Recognized Technical Talent)",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com/",
          logo_path: "lockheed_logo.jpg",
          duration: "Sept 2023 - Present",
          location: "Herndon, VA, USA",
          description:
            "Architecting standardized data integration systems and canonical data models using industry standards (OAGIS and others). Serving as Sr. DevSecOps Engineer and AI/ML Solutions Architect for secure CI/CD, Kubernetes deployments, and AI/ML workflow integration. Building ontology-based data solutions leveraging knowledge graphs and LLMs; contributing to the NIST SCORE Tool and cross-industry standards boards.",
          color: "#0B1F3B",
        },
        {
          title: "Data Engineer",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com/",
          logo_path: "lockheed_logo.jpg",
          duration: "Oct 2020 - Sept 2023",
          location: "Herndon, VA, USA",
          description:
            "Built secure CI/CD pipelines and performed security assessments for containerized systems deployed on Red Hat OpenShift; developed prototypes supporting security testing and platform hardening.",
          color: "#0B1F3B",
        },
        {
          title: "Cyber Intelligence Analyst (Associate)",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com/",
          logo_path: "lockheed_logo.jpg",
          duration: "Aug 2019 - Oct 2020",
          location: "Herndon, VA, USA",
          description:
            "Supported cyber operations and engineering efforts, contributing to secure system deployments and security analysis workflows.",
          color: "#0B1F3B",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com/",
          logo_path: "lockheed_logo.jpg",
          duration: "May 2018 - Jan 2019",
          location: "Rockville, MD, USA",
          description:
            "Developed analytics software and reconnaissance tooling to support data collection and engineering workflows.",
          color: "#0B1F3B",
        },
        {
          title: "Web Security Technical Program Manager Intern",
          company: "Facebook (via CodePath University)",
          company_url: "https://about.meta.com/",
          logo_path: "facebook_logo.png",
          duration: "Jul 2017 - Dec 2018",
          location: "Blacksburg, VA, USA",
          description:
            "Led training and coordination focused on web security, assessment, monitoring, and secure input/output practices through CodePath and Facebook-sponsored programming.",
          color: "#1877F2",
        },
        {
          title: "Back End Software Development Intern",
          company: "TwinThread LLC",
          company_url: "",
          logo_path: "twinthread_logo.jpeg",
          duration: "May 2017 - Aug 2017",
          location: "Charlottesville, VA, USA",
          description:
            "Developed SQL databases, JavaScript visualizations, and ML components supporting IIoT sensor systems and digital twin concepts.",
          color: "#2F3642",
        },
      ],
    },

    {
      title: "Research & Projects",
      experiences: [
        {
          title: "AI Security Forensic Observability Research",
          company: "University of Virginia DART Lab",
          company_url: "https://www.virginia.edu/",
          logo_path: "dart_logo.png",
          duration: "Aug 2025 - Present",
          location: "Virginia, USA",
          description:
            "Researching LLM and agent observability from a security-first perspective, emphasizing forensic reconstructability and provenance-aware system design.",
          color: "#E57200",
        },
        {
          title: "LLM Usage in SOC Centers Research",
          company: "University of Virginia DART Lan",
          company_url: "https://www.virginia.edu/",
          logo_path: "dart_logo.png",
          duration: "Aug 2025 - Present",
          location: "Virginia, USA",
          description:
            "Studying how LLMs are used across SOC roles and skill levels, identifying operational patterns, failure modes, and tooling gaps relevant to detection and response.",
          color: "#E57200",
        },
        {
          title: "NIST SCORE Tool — MCP AI Integration (Open Source Contribution)",
          company: "NIST",
          company_url: "https://www.nist.gov/",
          logo_path: "nist_logo.png",
          duration: "Dec 2025",
          location: "USA",
          description:
            "Architected a vendor-agnostic Model Context Protocol (MCP) integration enabling SCORE users to connect MCP-compliant LLMs and tools to existing workflows; developed supporting resources and prompts and presented to government and industry partners.",
          color: "#1A2B49",
        },
      ],
    },

    {
      title: "Entrepreneurship",
      experiences: [
        {
          title: "Founder & Maker",
          company: "By Sasha Lasha'e",
          company_url: "",
          logo_path: "bsl_logo.png", // replace with your own logo asset if you have one
          duration: "2022 - Present",
          location: "Virginia, USA",
          description:
            "Founder of By Sasha Lasha'e, a handcrafted goods and community-driven brand producing custom decor and licensed collegiate merchandise. Experience spans product design, fabrication, inventory operations, vendor markets (including Painted Tree Boutique), and customer-focused fulfillment. Recipient of multiple entrepreneurship grants supporting growth and expanded production capabilities.",
          color: "#2F3642",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected work across agentic systems, AI security, forensic observability, secure MLOps, and ontology-driven data engineering.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Research, technical write-ups, and public-facing notes on AI security, observability, agentic systems, and data-first engineering.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    */
  ],
};

// Contact Page
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "2.png",
    description:
      "For collaborations, speaking, research, or engineering consulting around AI security, LLM threat detection, agent forensics, and secure MLOps—reach out anytime.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Notes on AI security engineering, LLM threat detection, agent forensics, and data-first system design.",
    link: "https://blogs.sashamorgan.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
