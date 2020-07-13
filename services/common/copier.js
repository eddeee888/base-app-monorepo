const fs = require("fs");
const path = require("path");
const config = require("./utils/config").default;
const copyFile = require("./utils/copyFile").default;

// 1. Get all files under source root
const getAllFiles = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const allFiles = getAllFiles(config.SOURCE_ROOT, []);

// 2. Copy files to destinations based on config
allFiles.forEach((filePath) => copyFile("File found", { ...config.destinations }, filePath));
