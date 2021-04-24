import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { hireMentor } from '../../../shared/services/hiring/hire.action';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class MentorCardComponent implements OnInit {

  @Input('itemData') itemData: any;
  mentors;


  constructor(config: NgbRatingConfig, public authService: AuthService,
    private router: Router,
    private store: Store<{ list }>) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    this.store.select('list').subscribe((data) => {
      this.mentors = data;
    })
  }

  hireTheMentor(mentor) {
    this.mentors.hireList.find(m => m.id == mentor.id);
    this.store.dispatch(new hireMentor(mentor));
    this.router.navigate(['./checkout'])
  }

  // toCheckout() {
  //   if (!this.authService.isLoggedIn) {
  //     this.router.navigate(['sign-in']);
  //     return false;
  //   } else {
  //     this.router.navigate(['./checkout'])
  //     return true;
  //   }

  // }

}
