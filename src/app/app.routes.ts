import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '',title:"Home Page", component: LoginComponent },
    { path: 'register',title:"Register", component: RegisterComponent },
    { path: 'home',title:"Home", component: HomeComponent },
    { path: 'about',title:"About Us", component: AboutComponent },

];
