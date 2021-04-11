import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanComponent } from './plan/plan.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';



@NgModule({
  declarations: [
    PlanComponent,
    PlanDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanModuleModule { }
