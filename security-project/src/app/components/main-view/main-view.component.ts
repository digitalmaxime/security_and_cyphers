import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    this.saveDrawingToServer("alo");
  }

  saveDrawingToServer(text: string): any {
    console.log("trying to send to server..");
    return this.httpClient.post<string>('http://localhost:3000/', "text-test").subscribe((response) => {
      this.responses.push(response);
    });
  }

  showResponses() {
    console.log(this.responses);
  }
}
