// const http = require('http');
const routes = require('./routes');

const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();

// use it before all route definitions
app.use(cors());
// app.use(cors({origin: '*'}));

// Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'localhost:4200');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     // res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });


// router.get('/localhost/', (req, res, next)=> {
//     console.log("GET : ");
//     res.write("hwllp");
//     res.end();
// });
//     // res.sendFile(path.join(rootDir, 'views', 'try-exercice.html'));

// router.post('/localhost/', (req, res, next)=> {
//     console.log("POST : ")
// });

app.get("/", (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
