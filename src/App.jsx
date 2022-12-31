import React from "react";
import Link, { CodeLink, HomeLink } from "./lib/components/Link";
import WithHeavyFooter, {
  Body,
  HeavyFooter,
} from "./lib/components/WithHeavyFooter";

export default function App() {
  return (
    <WithHeavyFooter>
      <Body>Custom Content</Body>
      <HeavyFooter>
        <HomeLink />
        <CodeLink gitHubRepoName="connect-4" />
        Custom content
        <Link url="https://www.google.ca" src="" description="Example" />
      </HeavyFooter>
    </WithHeavyFooter>
  );
}
