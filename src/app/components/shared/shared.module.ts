import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../reusable-components/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
//import{ HireButtonComponent } from '../reusable-components/hire-button/hire-button.component';


@NgModule({
  declarations: [
    CardComponent,
    //HireButtonComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class SharedModule { }
