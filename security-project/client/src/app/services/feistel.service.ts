import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feistel } from '../models/feistel.model';

@Injectable({
  providedIn: 'root'
})
export class FeistelService {
  public feistelModel: Feistel | undefined;

  constructor(private httpClient: HttpClient) { }

  postFeistelEncryptionFromServer(word: string): Subscription {
    // let param = new HttpParams().set('id', new Date().toISOString());
    // console.log("param id: " + param.get("id"));
    return this.httpClient.post<any>(
      "http://localhost:3000/api/feistel",
      { word: word, id: new Date().toISOString()},)
      .subscribe((data) => {
        // this.feistelModel = data.feistel;
        console.log(data);
        // this.postUpdated.next([...this.posts]);
      });
  }
}
