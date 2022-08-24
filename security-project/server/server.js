const fs = require('fs');
const express = require('express');
const debug = require("debug")("node-angular");
const bodyParser = require('body-parser');
const app = express();

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");

app.set("port", port);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
      "Access-Control-Allow-Methods", 
      "GET, POST, DELETE, OPTIONS")
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/posts", (req, res) => {
    const posts = [
        { id: "adsf",
            title: "first title",
            content: "my content"    
        },
        { id: "sffsad",
            title: "second title",
            content: "my content!"    
        },
    ];
    res.status(200).json({
        message: "Request succesful",
        posts: posts
    });
});

app.post('/api/posts', (req, res, next) => {
  const data = req.body;
  console.log(data);
  fs.appendFile('./data/names.txt', `\n${data.name}`, () => {});
  res.status(201).json({
    message: "Name added successfully!"
  })
})

// const server = app.createServer(app);
app.on("error", onError);
app.on("listening", onListening);
app.listen(port);
