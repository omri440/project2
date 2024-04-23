import { Injectable } from '@angular/core';
import { Post } from '../components/posts-section/post.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   public posts:Post[] = []
   public postSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
   private serverUrl:string = 'http://localhost:3000/api/post'

  constructor(private http : HttpClient) { }

  setPost(post:Post){ // set this method for use it in data storage service when we fetch post from fire base so wi will initail the recipe array 
    return this.http.post(this.serverUrl,post)
   }

   getPost(){
    this.http.get<{message:string, posts:Post[]}>(this.serverUrl).subscribe((res) => {
      this.posts = res.posts;
      console.log(res.message);
      this.postSubject.next(this.posts);
    })
   }
  sendPost(): Observable<Post[]> { // get reicpes when we have change
    return this.postSubject.asObservable() ;
  }

  getPostById(index:number){ // get recipes by id 
    return this.posts[index] ;
  }
}
