import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guard
import { AuthGuard } from './components/shared/guard/auth.guard';

// pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

import { MentorsComponent } from './pages/mentors-module/mentors/mentors.component';
import { MentorDetailsComponent } from './pages/mentors-module/mentor-details/mentor-details.component';
import { CoursesComponent } from './pages/courses-module/courses/courses.component';

import { ClientComponent } from './profiles/client-module/client/client.component';
import { MentorComponent } from './profiles/mentor-module/mentor/mentor.component';



// Components
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';

import { ShoppingCartComponent } from './components/reusable-components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
import { ShoppingComponent } from './pages/shopping-module/shopping/shopping.component';
import { ChattingComponent } from './components/reusable-components/chatting/chatting.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'mentors', component: MentorsComponent },
  { path: 'mentor-details/:id', component: MentorDetailsComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },


  { path: 'courses', component: CoursesComponent },
  { path: 'shopping', component: ShoppingComponent },

  { path: 'client', component: ClientComponent },
  { path: 'mentor', component: MentorComponent },

  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard]  },

  { path: "chatting", component: ChattingComponent },

  { path: "**", component: NotFoundComponent },



  // , canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
