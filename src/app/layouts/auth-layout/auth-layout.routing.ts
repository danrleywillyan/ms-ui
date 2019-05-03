import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/templates/login/login.component';
import { RegisterComponent } from '../../pages/templates/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
