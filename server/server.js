const http = require('http');
// const fs = require('fs');

// const express = require('express');
// const router = express.Router();

// router.get('/localhost/', (req, res, next)=> {
//     console.log("GET : ");
//     res.write("hwllp");
//     res.end();
// });
//     // res.sendFile(path.join(rootDir, 'views', 'try-exercice.html'));

// router.post('/localhost/', (req, res, next)=> {
//     console.log("POST : ")
// });

const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);