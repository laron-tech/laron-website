import fs from "fs";
function readDir(path) {
  return fs.readdirSync(path);
}
function exist(path) {
  return fs.existsSync(path);
}
function loadFile(path) {
  return fs.readFileSync(path, "utf8");
}
export {
  exist as e,
  loadFile as l,
  readDir as r
};
