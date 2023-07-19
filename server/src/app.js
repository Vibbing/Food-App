const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const http = require("http");
const db = require("./config");
const PORT = 4000;
const user = require("./routes/user");
const admin = require("./routes/admin");
const app = express();

app.use(cors({ origin: ["http://localhost:1234"] }));
app.use(logger("dev"));
app.use(express.json());
app.use("/", user);
app.use("/admin", admin);

app.post("/user_login", (req, res) => {
  console.log(req.body);
  res.send({ message: "hai" });
});

db();
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`app is listening on ${PORT} `);
});
