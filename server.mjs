import http from "http";
import fs from "fs";

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

// always at the end
server.listen(PORT, () => console.log(`server running on ${PORT}`));

const path = require("path");
const os = require("os");

console.log("hello");
// console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
// console.log(os.type());
// console.log(os.version());
