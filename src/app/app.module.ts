import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { AuthModuleModule } from './components/authentication/auth-module.module';
import { ClientModuleModule } from './profiles/clientModule/client-module.module';
import { MintorModuleModule } from './profiles/mintorModule/mintor-module.module';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


// environment
import { environment } from '../environments/environment';

// Services
import { AuthService } from './components/shared/services/auth.service';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// pages
import { HomeComponent } from './pages/home/home.component';
import { PlanComponent } from './pages/plan/plan.component';
import { CourseComponent } from './pages/course/course.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/reusable-components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PlanComponent,
    CourseComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModuleModule,
    ClientModuleModule,
    MintorModuleModule,

    AngularFireModule.initializeApp(environment.firebaseConfig), // Required for everything
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, NgbModule // Only required for storage features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
