const chokidar = require("chokidar");
const fs = require("fs");
const config = require("./utils/config").default;
const copyFile = require("./utils/copyFile").default;

// Step 1. Find destination direction directories and remove them to always have a clean slate when started
// This helps with files that have had name changes, deleted files, etc.
((configParams) => {
  console.log("*** Cleaning up old folders - START");
  Object.entries(configParams).forEach(([sourceFolder, destinationDirs]) => {
    destinationDirs.forEach((destination) => {
      const dirToRemove = `${destination}/${sourceFolder}`;
      // I'm paranoid I may break your $5000 machine by deleting something w/ absolute path
      if (dirToRemove.charAt(0) !== "/") {
        fs.rmdirSync(dirToRemove, { recursive: true });
        console.log(`Deleted ${dirToRemove}`);
      } else {
        console.log(`Skipped deleting ${dirToRemove} - Absolute paths are not supported.`);
      }
    });
  });
  console.log("*** Cleaning up old folders - DONE");
})({ ...config.destinations });

// Step 2. Start watcher on source and copy files to destinations
const watcher = chokidar.watch(config.SOURCE_ROOT);

watcher.on("add", (filePath) => copyFile("File added", { ...config.destinations }, filePath));
watcher.on("change", (filePath) => copyFile("File changed", { ...config.destinations }, filePath));
