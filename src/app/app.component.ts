import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular';
import { FooterComponent } from './components/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,RouterModule,RouterLink,IGX_CAROUSEL_DIRECTIVES,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectNumber2';
}
