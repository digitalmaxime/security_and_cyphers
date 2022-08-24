const fs = require('fs');

exports.getPosts = (req, res) => {
    var posts = [
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
}

exports.postPosts = (req, res, next) => {
    console.log("in post Posts±!")
    var data = req.body;
    console.log(data);
    fs.appendFile('./data/names.txt', "\n".concat(data.name), function () { });
    res.status(200).json({
        message: "Name added successfully!"
    });
}