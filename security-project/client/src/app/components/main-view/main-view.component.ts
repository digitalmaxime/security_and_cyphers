import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';
import { FeistelCypherService } from 'src/app/services/feistel-cypher.service';


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

  constructor(private httpClient: HttpClient, private postService: PostsService, private cypherService: FeistelCypherService) {
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

  displaycurrentWord(word: string) {
    this.currentWord = word;
    this.currentWordASCIIes = this.createASCII(word);
    this.currentWordBinaries = this.createBinariesFromASCIIes(this.currentWordASCIIes);
    this.encrypted_message_list = this.currentWordBinaries.map((ele: number) => {
      return this.cypherService.calculateCypher(ele);
    })

    this.decrypted_message_list = this.encrypted_message_list.map(ele => {
      const binaryNum = parseInt(ele.toString(2))
      return this.cypherService.calculateCypher(binaryNum);
    })
    this.currentWordEncrypted = this.encrypted_message_list.map((ele:number) => {
      return String.fromCharCode(ele);
    }).join('');
    this.currentWordDecrypted = this.decrypted_message_list.map((ele:number) => {
      return String.fromCharCode(ele);
    }).join('');
  }

  createASCII(word: string): number[] {
    const asciis = [];
    for (let i = 0; i < word.length; i++) {
      const asciiNum = word.charCodeAt(i);
      asciis.push(asciiNum);
    }
    return asciis;
  }
  
  createBinaryFromASCIIes(numbers: number[]): number {
    const binaries = [];
    for (let i = 0; i < numbers.length; i++) {
      const bin = this.currentWordASCIIes[i].toString(2);
      binaries.push(bin);
    }
    return parseInt(binaries.join(''));
  }
  
  createBinariesFromASCIIes(numbers: number[]): number[] {
    const binaries = [];
    for (let i = 0; i < numbers.length; i++) {
      const bin = this.currentWordASCIIes[i].toString(2);
      binaries.push(parseInt(bin));
    }
    return binaries;
  }
}
