import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FadeInOut } from './animation';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
  animations: [
    trigger('divState', [
      state('start', style({
        transform: 'translateX(-100%)',
        opacity: '0',
      })),
      
      state('end1', style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      state('startBtn', style({
        transform: 'translateX(0)',
        opacity: '1',
      })),
      
      state('endBtn', style({
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      
      transition("start => end1", animate("3s")),
      transition("startBtn <=> endBtn", animate("2s")),
    ])
  ]
})
export class AboutSectionComponent implements OnInit {
 public stateleft = "start"
 public stateBtn = "endBtn"
 public isShow = false
public wordList = ["Get" ,"online" ,"and" ,"grow" ,"fast"]


ngOnInit(): void {
  setTimeout(() => {
    this.toggleClasses()
  }, 500);
}


toggleClasses() {
  this.stateleft = 'end1'
  this.isShow = !this.isShow
}

toggleButton(state:string){
  this.stateBtn = state
}
}
