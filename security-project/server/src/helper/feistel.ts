const FeistelCypherService = require("./helper/feistel-cypher.service");

module.exports =  class Feistel {

  public static currentWord: string = "";
  public static currentWordASCIIes: number[] = [];
  public static currentWordBinaries: number[] = [];
  public static currentWordEncrypted: string = "";
  public static currentWordDecrypted: string = "";

  public static encrypted_message_list: number[] = [];
  public static decrypted_message_list: number[] = [];

  constructor() {}

    static computeFeistelOnWord(word: string) {
        this.currentWord = word;
        this.currentWordASCIIes = this.createASCII(word);
        this.currentWordBinaries = this.createBinariesFromASCIIes(this.currentWordASCIIes);
        this.encrypted_message_list = this.currentWordBinaries.map((ele: number) => {
            return FeistelCypherService.calculateCypher(ele);
        })

        this.decrypted_message_list = this.encrypted_message_list.map(ele => {
            const binaryNum = parseInt(ele.toString(2))
            return FeistelCypherService.calculateCypher(binaryNum);
        })
        this.currentWordEncrypted = this.encrypted_message_list.map((ele: number) => {
            return String.fromCharCode(ele);
        }).join('');
        this.currentWordDecrypted = this.decrypted_message_list.map((ele: number) => {
            return String.fromCharCode(ele);
        }).join('');
    }

    static createASCII(word: string): number[] {
        const asciis: number[] = [];
        for (let i = 0; i < word.length; i++) {
            const asciiNum: number = word.charCodeAt(i);
            asciis.push(asciiNum);
        }
        return asciis;
    }

    static createBinaryFromASCIIes(numbers: number[]): number {
        const binaries: string[] = [];
        for (let i = 0; i < numbers.length; i++) {
            const bin = this.currentWordASCIIes[i].toString(2);
            binaries.push(bin);
        }
        return parseInt(binaries.join(''));
    }

    static createBinariesFromASCIIes(numbers: number[]): number[] {
        const binaries: number[] = [];
        for (let i = 0; i < numbers.length; i++) {
            const bin = this.currentWordASCIIes[i].toString(2);
            binaries.push(parseInt(bin));
        }
        return binaries;
    }
}