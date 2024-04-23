import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { PostsSectionComponent } from './components/posts-section/posts-section.component';
import { MaterialModule } from './modules/material/material.module';
import { HeadarComponent } from './components/headar/headar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostsSectionComponent,
    HeadarComponent,
    PostListComponent,
    OpeningPageComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule here
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
