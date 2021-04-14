import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})
export class MentorDetailsComponent implements OnInit {

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
