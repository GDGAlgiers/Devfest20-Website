# Typography components

This is a a container component for all the typography that we might need in the project.
we should use it as much as possible to have consistent typography throughout the project. it currently contains.

- **H1** : equivalent to h1 element.
- **H2** : equivalent to h2 element.
- **H3** : equivalent to h3 element.
- **H4** : equivalent to h4 element.
- **H5** : equivalent to h5 element.
- **H6** : equivalent to h6 element.

If you need to customize these headings in the project please use styled components extension just like this:

- `const StyledH1 = styled(H1)`
- You can add further CSS to your **StyledH1** by opening back-ticks and writing css there.
- It is always preferable to use classes from **tailwind** to keep things consistent example:
  - `const StyledH1 = styled(H1).attrs({ className : " text-6xl "})` to make the H1 bigger

The current used font is **Roboto** but will be changed once the fonts from design team are determined.
You can find the details on the configuration of typography in **tailwind.config.js** file and you can further customize it there.
