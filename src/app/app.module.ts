import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { AuthModuleModule } from './components/authentication/auth-module.module';
import { MentorsModuleModule } from './pages/mentors-module/mentors-module.module';
import { ClientModuleModule } from './profiles/client-module/client-module.module';
import { MentorModuleModule } from './profiles/mentor-module/mentor-module.module';
import { SharedModule } from './components/shared/shared.module';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// environment
import { environment } from '../environments/environment';

// Services
import { AuthService } from './components/shared/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

// Store
import { StoreModule } from '@ngrx/store';
import { shopping_cart_reducer } from './components/shared/services/store/cart.reducer';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/reusable-components/header/header.component';
import { topRatedCoursesComponent } from './components/reusable-components/topRated-courses/topRated-courses.component';
import { topRatedMentorsComponent } from './components/reusable-components/topRated-mentors/topRated-mentors.component';
import { AchievementsComponent } from './components/reusable-components/achievements/achievements.component';
import { ShoppingCartComponent } from './components/reusable-components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
import { HireButtonComponent } from './components/reusable-components/hire-button/hire-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HeaderComponent,
    topRatedCoursesComponent,
    topRatedMentorsComponent,
    AchievementsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    HireButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModuleModule,
    MentorsModuleModule,
    MentorModuleModule,
    ClientModuleModule,
    HttpClientModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebaseConfig), // Required for everything
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,  // Only required for storage features

    NgbModule,
    StoreModule.forRoot({ cart: shopping_cart_reducer }),
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
