import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent implements OnInit {

  activeId;

  constructor(private activatedRoute : ActivatedRoute) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params.id);
      // console.log(params.name);
      this.activeId = params.id;
    });
   }

  ngOnInit(): void {
  }

}
