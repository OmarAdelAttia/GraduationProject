import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../components/shared/services/auth/auth.service';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})
export class MentorDetailsComponent implements OnInit {

  activeId;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public authService: AuthService) {

    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      // console.log(params.id);
      // console.log(params.name);
      this.activeId = params.id;
    });
  }

  ngOnInit(): void {
  }

  toCheckout() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['sign-in']);
      return false;
    } else {
      this.router.navigate(['./checkout'])
      return true;
    }

  }

}
