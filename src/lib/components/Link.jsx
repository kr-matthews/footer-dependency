import React from "react";
import gitHubImage from "../../assets/github.png";
import gitHubImageDark from "../../assets/github-dark.png";
import websiteImage from "../../assets/website-logo.svg";

export default function Link({ url, image, description }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={description}>
      <img
        style={{
          height: "1.5em",
          margin: "0.2em 0.5em",
        }}
        src={image}
        alt={description}
      />
    </a>
  );
}

export function HomeLink() {
  return (
    <Link
      description={"Personal Website"}
      url={"https://kr-matthews.github.io/"}
      image={websiteImage}
    />
  );
}

export function CodeLink({ gitHubRepoName = "", themeType = "light" }) {
  return (
    <Link
      description={"Project Repository"}
      url={`https://github.com/kr-matthews/${gitHubRepoName}`}
      image={themeType === "light" ? gitHubImage : gitHubImageDark}
    />
  );
}
