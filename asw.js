const itech = require("./dist");
const api = new itech.key("restugbk-itechnologi-11012021");

itech.downloader
  .youtubeScraper("https://youtu.be/fSyA2kCNqj0")
  .then(console.log);
