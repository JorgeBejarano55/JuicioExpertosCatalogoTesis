import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeWelcomeComponent } from "./home-welcome/home-welcome.component";
import { FormsModule } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
      HomeWelcomeComponent, 
      FormsModule,
      FormReactiveComponent]
})
export class AppComponent {
  title = 'formulario-olores-comunitarios';
}
