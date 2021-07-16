const presets = [["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"];

// Vite handles preset-env automatically.
// We run jest tests in a separate setup and it needs @babel/preset-env.
if (process.env.BABEL_ENV === "test") {
  presets.push(["@babel/preset-env", { targets: { node: "current" } }]);
}

module.exports = {
  presets,
};
