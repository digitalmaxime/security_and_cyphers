const FeistelCypherService = require("./feistel-cypher-service");

module.exports =  class FeistelDataTransformation {

  currentWord;
  currentWordASCIIes = [];
  currentWordBinaries = [];
  currentWordEncrypted;
  currentWordDecrypted;
  encrypted_message_list = [];
  decrypted_message_list = [];

  constructor() {}

    static computeFeistelOnWord(word) {
        this.currentWord = word;
        this.currentWordASCIIes = this.createASCII(word);
        this.currentWordBinaries = this.createBinariesFromASCIIes(this.currentWordASCIIes);
        this.encrypted_message_list = this.currentWordBinaries.map((ele) => {
            return FeistelCypherService.calculateCypher(ele);
        })

        this.decrypted_message_list = this.encrypted_message_list.map(ele => {
            const binaryNum = parseInt(ele.toString(2))
            return FeistelCypherService.calculateCypher(binaryNum);
        })
        this.currentWordEncrypted = this.encrypted_message_list.map((ele) => {
            return String.fromCharCode(ele);
        }).join('');
        this.currentWordDecrypted = this.decrypted_message_list.map((ele) => {
            return String.fromCharCode(ele);
        }).join('');

        return this.currentWordEncrypted;
    }

    static createASCII(word) {
        const asciis = [];
        for (let i = 0; i < word.length; i++) {
            const asciiNum = word.charCodeAt(i);
            asciis.push(asciiNum);
        }
        return asciis;
    }

    static createBinaryFromASCIIes(numbers) {
        const binaries = [];
        for (let i = 0; i < numbers.length; i++) {
            const bin = this.currentWordASCIIes[i].toString(2);
            binaries.push(bin);
        }
        return parseInt(binaries.join(''));
    }

    static createBinariesFromASCIIes(numbers) {
        const binaries = [];
        for (let i = 0; i < numbers.length; i++) {
            const bin = this.currentWordASCIIes[i].toString(2);
            binaries.push(parseInt(bin));
        }
        return binaries;
    }
}