import { appendFile, readFile, writeFile } from "fs";
import path from "path";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;
readFile(path.join(__dirname, "files", "file1.txt"), (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

console.log("Hey!!");

writeFile(path.join(__dirname, "files", "file2.txt"), "This is test", (err) => {
  if (err) {
    throw err;
  }
  console.log("File Written");
});

appendFile(path.join(__dirname, "files", "file2.txt"), "yah yah", (err) => {
  if (err) {
    throw err;
  }
  console.log("File Appended");
});

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
