import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../components/shared/services/auth/auth.service';
import { TopRatedService } from '../../../components/shared/services/Apis/top-rated.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})
export class MentorDetailsComponent implements OnInit {

  activeId;

  constructor(private activatedRoute : ActivatedRoute,
              private router: Router, public authService: AuthService,
              public topRatedService: TopRatedService,
              private httpClient: HttpClient) {


  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activeId = params;
      console.log(params);
      // console.log(params.id);
      // console.log(this.activeId);
      // this.activeId = params.id;
    });

    this.httpClient.get('https://firestore.googleapis.com/v1/projects/neofit-project/databases/(default)/documents/TopRated/' + this.activeId.id).subscribe(data => {
      console.log(data)
    })
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
