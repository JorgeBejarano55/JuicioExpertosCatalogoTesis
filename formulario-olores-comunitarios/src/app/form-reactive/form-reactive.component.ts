import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from "survey-core";

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

@Component({
  selector: 'app-form-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent implements OnInit {
  
  public basicDateForm!: FormGroup;
  public myField = new FormControl();
  surveyModel: Model | undefined;

  constructor (private readonly fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.basicDateForm = this.initForm();
    const surveyJson = {
      elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
      }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
      }]
    };
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
  }

  initForm(): FormGroup{
    return this.fb.group({
      name: [''],
      email: ['']
    })
  }

  onSubmit():void{
    console.log("Hola ",this.basicDateForm.value)
    this.router.navigateByUrl("/")
  }

}
