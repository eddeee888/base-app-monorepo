const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

const SOURCE_ROOT = "src";

const CLIENT_DESTINATION = "../client/src/common";
const CLIENT_SEO_DESTINATION = "../client-seo/src/common";
const SERVER_DESTINATION = "../server/src/libs";

// Note: config key is the immediate dir after SOURCE_ROOT. We only support 1 level.
// i.e. DO NOT do shared-something/something
const config = {
  "shared-apollo": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-local-storage": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-styles": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-typings": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-ui": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-graphql-errors": [CLIENT_DESTINATION],
  "shared-validations": [CLIENT_DESTINATION, SERVER_DESTINATION],
};

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
})({ ...config });

// Step 2. Start watcher on source and copy files to destinations
const copyFile = (event, parsedConfig, filePath) => {
  console.log(`${event}: ${filePath}`);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [srcRoot, configDirKey, ...relativeFilePathParts] = filePath.split("/");
  const relativeFilePath = relativeFilePathParts.join("/");
  const dirName = path.dirname(relativeFilePath);
  const filename = path.basename(relativeFilePath);

  const destinations = parsedConfig[configDirKey];
  if (!destinations) {
    console.log(`[WARNING] Unable to get destinations for ${configDirKey}`);
    return;
  }

  destinations.forEach((destination) => {
    const destinationDir = `${destination}/${configDirKey}/${dirName}`;
    const destinationFilepath = `${destinationDir}/${filename}`;

    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
    }

    fs.copyFile(filePath, destinationFilepath, (err) => {
      if (err) {
        throw new Error(err.message);
      }
      console.log(`Copied ${filePath} -> ${destinationFilepath}`);
    });
  });
};

const watcher = chokidar.watch(SOURCE_ROOT);

watcher.on("add", (filePath) => copyFile("File added", { ...config }, filePath));
watcher.on("change", (filePath) => copyFile("File changed", { ...config }, filePath));
