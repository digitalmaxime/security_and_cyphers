const fs = require('fs');
const express = require('express');
const debug = require("debug")("node-angular");
const bodyParser = require('body-parser');
const feistelRoutes = require('./routes/feistel.js');
const postsRoutes = require('./routes/posts-obsolete.js');
var app = express();

var normalizePort = function (val) {
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
var onError = function (error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "pipe " + port : "port " + port;
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
var onListening = function () {
    var addr = server.address();
    var bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/feistel", feistelRoutes);
// app.use("/api/posts", (req, res, next) => {
//     res.status(200).end('hallo');
// });
app.use("/api/posts", postsRoutes);

app.on("error", onError);
app.on("listening", onListening);
app.listen(port);
