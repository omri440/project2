import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsSectionComponent } from './components/posts-section/posts-section.component';
import path from 'path';
import { PostListComponent } from './components/post-list/post-list.component';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:OpeningPageComponent},
  {path:'create',component:CreatePostComponent},
  {path:'poststep/:id/edit',component:CreatePostComponent},
  {path:'poststep',component:PostsSectionComponent,children:[{path:'',component:PostListComponent}]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
