import express from 'express';
import http from "http";


const app = express();
// import SocketService from "./services/socket";
// import { startMessageConsumer } from "./services/kafka";
// async function init() {
//   startMessageConsumer();
//   const socketService = new SocketService();

const httpServer = http.createServer();
const PORT = process.env.PORT ? process.env.PORT : 8000;

//   socketService.io.attach(httpServer);
app.get("/", (req, res) => {
  res.send("hello")
})
app.listen(PORT, () =>
  console.log(`HTTP Server started at PORT:${PORT}`)
);

//   socketService.initListeners();
// }

// init();