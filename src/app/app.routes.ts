import { Routes } from '@angular/router';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ConfidentialInformationComponent } from './confidential-information/confidential-information.component';

export const routes: Routes = [
    { path:"", component: HomeWelcomeComponent , pathMatch: 'full'},
    { path:"informacionConfidencial", component: ConfidentialInformationComponent},
    { path:"cuestionario", component: FormReactiveComponent},
];
