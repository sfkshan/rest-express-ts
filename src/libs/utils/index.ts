const glob = require("glob");
const path = require("path");

export function importFromDirectories(filePath: String) {
  return glob.sync(filePath);
}
