import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../posts-section/post.model';
import { PostService } from '../../services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit,OnDestroy {

  postList:Post[] =[];
  subscription:Subscription;
  
  constructor(private postService:PostService){}
  
  
  
  ngOnInit(): void {
    this.subscription = this.postService.getRecipes().subscribe(posts => {
      this.postList = posts;
      console.log(posts);
    });
  }
  onDelete(index: number) {
    this.postService.posts.splice(index,1);
    this.postService.postSubject.next(this.postService.posts)
    }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
