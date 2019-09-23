const app = require("./app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = process.env.PORT;

http.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

io.on("connection", function(socket) {
  console.log("a user connected");
});
