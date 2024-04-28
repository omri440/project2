import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' ,pathMatch:'full', loadComponent: () => import('./components/about-section/about-section.component').then((m) => m.AboutSectionComponent)},
    {path:'resume' ,pathMatch:'full', loadComponent: () => import('./components/resume/resume.component').then((m) => m.ResumeComponent)},

];
