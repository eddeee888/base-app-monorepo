let plugins = [];

if (!process.env.BABEL_ENV === "test") {
  plugins = [
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/core",
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "core",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/icons",
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "icons",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/lab",
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "lab",
    ],
  ];
}

module.exports = { plugins };
