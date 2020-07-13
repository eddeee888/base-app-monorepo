const path = require("path");
const fs = require("fs");

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

exports.default = copyFile;
