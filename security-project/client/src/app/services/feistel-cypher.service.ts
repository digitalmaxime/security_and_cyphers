import { Injectable } from '@angular/core';
import { cypherFunction } from './helper/cypher-function';
import { XOR } from './helper/cypher-function';

@Injectable({
  providedIn: 'root'
})
export class FeistelCypherService {
  key: number = 4;
  constructor() { 
  }

  calculateCypher(binaryNumber: number): number {
    const listStr = binaryNumber.toString().split('');
    if (listStr.length % 2 !== 0) {
      console.log("ajusted..")
      listStr.unshift('0');
    }
    const arr = listStr.map(ele => parseInt(ele));
    
    let L = arr.slice(0, arr.length/2);
    let R = arr.slice(arr.length/2);
    for (let i = 0; i < 2; i++) {
      const originalR = [...R];
      R = cypherFunction(R, this.key);
      R = XOR(R, L);
      L = originalR;
    }
    const temp = L;
    L = R;
    R = temp;
    const concatenatedInt = L.concat(R);
    const concatenatedStr = concatenatedInt.map(ele => ele.toString());
    const res = parseInt(concatenatedStr.join(''), 2)
    return res;
  }
}
