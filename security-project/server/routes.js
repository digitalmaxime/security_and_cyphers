const fs = require('fs');

const requestHandler = (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);


    // const url = req.url;
    // const method = req.method;
    // console.log("OK!!!")
    // // if ( url === '/') {
    // //     return res.end();
    // // }

    // res.json({ 
    //     anObject: { item1: "item1val", item2: "item2val" }, 
    //     anArray: ["item1", "item2"], 
    //     another: "item"
    //   });
};


// module.exports = requestHandler;  
exports.handler = requestHandler;