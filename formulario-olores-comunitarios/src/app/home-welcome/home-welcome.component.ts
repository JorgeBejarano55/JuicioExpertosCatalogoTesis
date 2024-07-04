import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-welcome',
  standalone: true,
  imports: [],
  templateUrl: './home-welcome.component.html',
  styleUrl: './home-welcome.component.css'
})
export class HomeWelcomeComponent {
  
  constructor (private router: Router){}

  redirigir():void{
    this.router.navigateByUrl("/informacionConfidencial")
  }

}
