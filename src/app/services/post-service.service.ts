import { Injectable } from '@angular/core';
import { Post } from '../components/posts-section/post.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   public posts:Post[] = []
   public postSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor() { }

  setRecipes(posts:Post[]){ // set this method for use it in data storage service when we fetch post from fire base so wi will initail the recipe array 
    this.posts = posts ;
    this.postSubject.next(this.posts.slice()) ;
   }

  getRecipes(): Observable<Post[]> { // get reicpes when we have change
    return this.postSubject.asObservable() ;
  }

  getPostById(index:number){ // get recipes by id 
    return this.posts[index] ;
  }
}
