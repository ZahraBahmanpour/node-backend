import http from "http";

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

// always at the end
server.listen(PORT, () => console.log(`server running on ${PORT}`));
