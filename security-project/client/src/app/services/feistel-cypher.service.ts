import { Injectable } from '@angular/core';
import { cypherFunction } from './helper/cypher-function';
import { XOR } from './helper/cypher-function';

@Injectable({
  providedIn: 'root'
})
export class FeistelCypherService {
  key: number = 3;
  constructor() { 
  }

  calculateCypher(arr: number[]): number[] {
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
    return L.concat(R);
  }
}
