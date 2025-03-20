const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "../db.json"));
server.use(cors());
server.use(jsonServer.bodyParser);
server.use(jsonServer.defaults());
server.use(router);

exports.handler = async (event, context) => {
  await new Promise((resolve, reject) => {
    server
      .listen(0, () => {
        resolve();
      })
      .on("error", reject);
  });

  return {
    statusCode: 200,
    body: "JSON Server is running",
  };
};
