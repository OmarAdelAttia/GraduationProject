import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guard
import { AuthGuard } from './components/shared/guard/auth.guard';

// pages
import { HomeComponent } from './pages/home/home.component';
import { PlanComponent } from './pages/plan/plan.component';
import { CourseComponent } from './pages/course/course.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

import { ClientComponent } from './profiles/clientModule/client/client.component';
import { MentorComponent } from './profiles/mentorModule/mentor/mentor.component';

// Components
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'plan', component: PlanComponent, canActivate: [AuthGuard] },
  { path: 'course', component: CourseComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientComponent },
  { path: 'mentor', component: MentorComponent },
  { path: "**", component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
