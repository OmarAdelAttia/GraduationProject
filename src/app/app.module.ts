import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { AuthModuleModule } from './components/authentication/auth-module.module';
import { PlanModuleModule } from './pages/planModule/plan-module.module';
import { ClientModuleModule } from './profiles/clientModule/client-module.module';
import { MentorModuleModule } from './profiles/mentorModule/mentor-module.module';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


// environment
import { environment } from '../environments/environment';

// Services
import { AuthService } from './components/shared/services/auth/auth.service';

// Store
import { StoreModule } from '@ngrx/store';
import { shopping_cart_reducer } from './components/shared/services/store/cart.reducer';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// pages
import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/reusable-components/header/header.component';
import { CoursesComponent } from './components/reusable-components/courses/courses.component';
import { MentorsComponent } from './components/reusable-components/mentors/mentors.component';
import { AchievementsComponent } from './components/reusable-components/achievements/achievements.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CourseComponent,
    NotFoundComponent,
    HeaderComponent,
    CoursesComponent,
    MentorsComponent,
    AchievementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModuleModule,
    PlanModuleModule,
    ClientModuleModule,
    MentorModuleModule,

    AngularFireModule.initializeApp(environment.firebaseConfig), // Required for everything
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,  // Only required for storage features

    NgbModule,
    StoreModule.forRoot({cart: shopping_cart_reducer}),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
