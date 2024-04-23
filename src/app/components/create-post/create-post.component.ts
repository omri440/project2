import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post-service.service';
import { Post } from '../posts-section/post.model';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit {

constructor(private postService:PostService, private route:ActivatedRoute,private router:Router,){}

postForm:FormGroup;
postTitle:string;
postDescription:string;
id: number ;
 editmode = false ;

ngOnInit(): void {
  this.route.params.subscribe((params:Params) => {
    this.id = +params['id'] ;
    this.editmode = params['id'] != null;
    this.initializeFormControls()
  })
}


private initializeFormControls(): void {
  this.postTitle = '';
  this.postDescription = '';
  
  if (this.editmode) {
    const post: Post = this.postService.getPostById(this.id);
    this.postTitle = post.name;
    this.postDescription = post.description;
  }
  this.postForm = new FormGroup({
    'name': new FormControl(this.postTitle, Validators.required),
    'Description': new FormControl(this.postDescription, Validators.required),
  });
}

  private addNewPost(): void {
    const newPost= new Post(
      this.postForm.value.name,
      this.postForm.value.Description,
    );
    this.postService.setPost(newPost).subscribe(res =>{
      this.postService.posts.push(newPost);
    this.postService.postSubject.next(this.postService.posts);
    })
  }

  private editPost(): void {
    const editRecipe = this.postService.getPostById(this.id);
    editRecipe.name = this.postForm.value.name;
    editRecipe.description = this.postForm.value.Description;
    this.postService.setPost(editRecipe).subscribe(message => {
      this.postService.posts[this.id] = editRecipe;
      this.postService.postSubject.next(this.postService.posts);
    })
  }

  onSubmit(): void {
    if(this.editmode){
      this.editPost();
    }
    else{
    this.addNewPost();
    }
    this.postForm.reset();
    this.router.navigate(['poststep'])
    
    }



}
