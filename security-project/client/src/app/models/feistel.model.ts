export interface Feistel {
    currentWord: string;
    currentWordASCIIes: number[];
    currentWordBinaries: number[];
    currentWordEncrypted: string;
    currentWordDecrypted: string;

    encrypted_message_list: number[];
    decrypted_message_list: number[];
}