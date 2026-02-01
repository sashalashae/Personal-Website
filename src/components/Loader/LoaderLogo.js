import React from "react";
import "./LoaderLogo.css";

/**
 * LogoLoader
 * - Animates a PNG (or any image) as a loader: pop-in → float → shimmer/glow.
 *
 * Usage:
 * <LogoLoader theme={theme} logoSrc="/images/sasha-logo.png" size={180} />
 *
 * Tip: Put your logo in /public/images/sasha-logo.png and pass logoSrc="/images/sasha-logo.png"
 * (Avoid spaces in filenames for fewer headaches.)
 */
const LogoLoader = ({ theme, logoSrc, size = 180, className = "" }) => {
  // Prefer theme colors if provided; fall back to tasteful defaults
  const accent =
    theme?.accentBright ||
    theme?.highlight ||
    theme?.body ||
    "#D4AF37"; // warm gold

  const shadow =
    theme?.secondaryText ||
    theme?.text ||
    "rgba(0,0,0,0.35)";

  // Default path (safe if you place the file in /public/images/)
  const fallbackSrc = "/images/sasha-logo.png";

  return (
    <div
      className={`loaderLogoWrap ${className}`}
      style={{
        "--loader-size": `${size}px`,
        "--loader-accent": accent,
        "--loader-shadow": shadow,
      }}
      aria-label="Loading"
      role="status"
    >
      <div className="loaderLogoFrame">
        <img
          className="loaderLogoImg"
          src={logoSrc || fallbackSrc}
          alt="Sasha Morgan logo"
          draggable="false"
        />
        <div className="loaderLogoShimmer" aria-hidden="true" />
      </div>
    </div>
  );
};

export default LogoLoader;
