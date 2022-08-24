import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';
import { FeistelService } from 'src/app/services/feistel.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  private postsSub: Subscription = new Subscription();
  public posts: Post[] = [];

  public currentWord: string = "";
  public currentWordASCIIes: number[] = [];
  public currentWordBinaries: number[] = [];
  public currentWordEncrypted: string = "";
  public currentWordDecrypted: string = "";

  encrypted_message_list: number[] = [];
  decrypted_message_list: number[] = [];

  constructor(
    private httpClient: HttpClient,
    private postService: PostsService,
    private feistelService: FeistelService) {

  }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      })
  }

  ngOndestroy() {
    this.postsSub.unsubscribe();
  }

  onFormSubmit(): void {
  }

  // getAgeFromName(name: string) {
  //   console.log("sending name :" + name );
  //   let param = new HttpParams().set('name', name);
  //   console.log(param);
  //   console.log("param name: " + param.get("name"));
  //   this.httpClient.get("https://api.agify.io/", {
  //     observe: 'body',
  //     responseType: 'json',
  //     params: param 
  //   }).subscribe((data: any) => {
  //     this.responses.push(data);
  //     console.log(data);
  //   });
  // }

  postStuffToLocalServer(name: string) {
    this.postService.postStuffToLocalServer(name);
  }

  computeFeistelOnWord(word: string) {
    this.feistelService.postFeistelEncryptionFromServer(word); // TODO: subscribe or something
  }
}
