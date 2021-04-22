import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CardComponent } from '../reusable-components/card/card.component';
import { ItemCardComponent } from '../reusable-components/cards/item-card/item-card.component';
import { MentorCardComponent } from '../reusable-components/cards/mentor-card/mentor-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
//import{ HireButtonComponent } from '../reusable-components/hire-button/hire-button.component';


@NgModule({
  declarations: [
    // CardComponent,
    ItemCardComponent,
    MentorCardComponent,
    //HireButtonComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [ItemCardComponent, MentorCardComponent]
})
export class SharedModule { }
