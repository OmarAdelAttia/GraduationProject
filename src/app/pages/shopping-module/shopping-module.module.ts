import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../components/shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    OwlModule,
    MatTabsModule,
    MatCardModule,
    CarouselModule,
    BrowserAnimationsModule
  ]
})
export class ShoppingModuleModule { }
