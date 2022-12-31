# Footer Dependency

The point of this project is to create a set of reusable components that I can use on each of my websites to link to my homepage and the source code via a footer.

Based on [this article](https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f) and [this stack overflow](https://stackoverflow.com/questions/71356016/how-to-share-react-component-across-multiple-projects). Then when that didn't work (at the `npm run build` step), [this stack overflow](https://stackoverflow.com/questions/62703393/support-for-the-experimental-jsx-isnt-currently-enabled). I don't quite understand how everything works.

## Example Usage

The `HomeLink` is designed specifically for my website, and `CodeLink` is designed for GitHub.

```
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
```
