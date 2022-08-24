import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();


  constructor(private httpClient: HttpClient) { }

  getPosts(): void {
    this.getStuffFromLocalServer("whah");
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    }

    this.posts.push(post);
    this.postUpdated.next([...this.posts])
  }

  getStuffFromLocalServer(name: string) {
    console.log("sending name :" + name );
    let param = new HttpParams().set('name', name);
    console.log(param);
    console.log("param name: " + param.get("name"));
    this.httpClient.get<{message: string, posts: Post[]}>("http://localhost:3000/api/posts", {
    // this.httpClient.get<Post>("http://192.168.0.197:3000/api/posts", {
      observe: 'body',
      responseType: 'json',
      params: param 
    }).subscribe((data) => {
      this.posts = data.posts;
      console.log(data);
      this.postUpdated.next([...this.posts]);
    });
  }
  
  postStuffToLocalServer(name: string) {
    console.log("name: " + name)
    this.httpClient.post<{message: string}>("http://localhost:3000/api/posts", { name: name })
      .subscribe((response) => {
        console.log(response);
    });
  }
}
