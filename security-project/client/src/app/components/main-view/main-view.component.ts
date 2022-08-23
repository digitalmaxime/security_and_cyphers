import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  name: string;
  age: string;
  count: any;
}

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  responses: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
  }

  getAgeFromName(name: string) {
    console.log("sending name :" + name );
    let param = new HttpParams().set('name', name);
    console.log(param);
    console.log("param name: " + param.get("name"));
    this.httpClient.get<Config>("https://api.agify.io/", {
      observe: 'body',
      responseType: 'json',
      params: param 
    }).subscribe((data: any) => {
      this.responses.push(data);
      console.log(data);
    });
  }

  getStuffFromLocalServer(name: string) {
    console.log("sending name :" + name );
    let param = new HttpParams().set('name', name);
    console.log(param);
    console.log("param name: " + param.get("name"));
    this.httpClient.get<Config>("localhost:3000", {
      observe: 'body',
      responseType: 'json',
      params: param 
    }).subscribe((data: any) => {
      this.responses.push(data);
      console.log(data);
    });
  }
}
