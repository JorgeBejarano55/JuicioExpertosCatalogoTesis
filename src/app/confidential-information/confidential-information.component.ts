import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confidential-information',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './confidential-information.component.html',
  styleUrl: './confidential-information.component.css'
})
export class ConfidentialInformationComponent {
  public acceptance: boolean = false;

  constructor (private router: Router){}

  change(acceptance: boolean):void{
    this.acceptance = acceptance;
  }

  continue():void{
    this.router.navigateByUrl("/cuestionario")
  }

}
