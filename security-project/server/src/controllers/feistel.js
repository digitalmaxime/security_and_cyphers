const FeistelDataTransformation = require('../helper/feistel-data-transformation');
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'encryptedWords.json'
);

exports.postFeistelOrchestrator = (req, res) => {
    console.log("in feistel post controller..")
    var word = req.body.word;
    var id = req.body.id;
    console.log(word);
    console.log("id : " + id);
    
    const encrypted = FeistelDataTransformation.computeFeistelOnWord(word);
    console.log("encrypted : " + encrypted);

    const file = fs.readFile(p, (err, fileContent) => {
        words = JSON.parse(fileContent);
        words[id] = { encrypted: encrypted, plain: word };
        fs.writeFile(p, JSON.stringify(words), (err) => {
            console.log(err);
        })
        res.status(200).json({ encrypted: encrypted });
    })
}

exports.getComputeFeistelOnNumber = (req, res) => {
    console.log("in feistel get controller.. ");
    res.status(200).json({ encrypted: "not implemented yet.." });
}