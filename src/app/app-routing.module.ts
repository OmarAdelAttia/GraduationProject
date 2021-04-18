import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guard
import { AuthGuard } from './components/shared/guard/auth.guard';

// pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

import { MentorsComponent } from './pages/mentors-module/mentors/mentors.component';
import { MentorDetailsComponent } from './pages/mentors-module/mentor-details/mentor-details.component';

import { ClientComponent } from './profiles/client-module/client/client.component';
import { MentorComponent } from './profiles/mentor-module/mentor/mentor.component';



// Components
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';

import { ShoppingCartComponent } from './components/reusable-components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';



const routes: Routes = [
  { path: '', component: HomeComponent },

  // LAZY LOADING WORK

  // {path: 'authentication',
  // loadChildren: () => import('./components/authentication/auth-module.module')
  // .then(m => m.AuthModuleModule)},

  // {path: 'mentors-module',
  // loadChildren: () => import('./pages/mentors-module/mentors-module.module')
  // .then(m => m.MentorsModuleModule)},

  // {path: 'client-module',
  // loadChildren: () => import('./profiles/client-module/client-module.module')
  // .then(m => m.ClientModuleModule)},

  // {path: 'mentor-module',
  // loadChildren: () => import('./profiles/mentor-module/mentor-module.module')
  // .then(m => m.MentorModuleModule)},

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'mentors', component: MentorsComponent },
  { path: 'mentor-details/:id', component: MentorDetailsComponent },
  // { path: 'mentor-details', component: MentorDetailsComponent },

  { path: 'client', component: ClientComponent },
  { path: 'mentor', component: MentorComponent },

  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },

  { path: "**", component: NotFoundComponent },

  // , canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
