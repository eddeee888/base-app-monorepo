let plugins = ["@emotion"];

if (!process.env.BABEL_ENV === "test") {
  plugins = [
    ...plugins,
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/core",
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "core",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/icons",
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "icons",
    ],
  ];
}

module.exports = { plugins };
