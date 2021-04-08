import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// AuthGuard
import { AuthGuard } from './components/shared/guard/auth.guard';

// Components
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { BlablablaComponent } from './components/blablabla/blablabla.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: 'blablabla', component: BlablablaComponent, canActivate: [AuthGuard] }
  { path: 'blablabla', component: BlablablaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
