import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../reusable-components/card/card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class SharedModule { }
