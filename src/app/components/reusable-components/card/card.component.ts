import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../components/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbRatingConfig]
})
export class CardComponent implements OnInit {

  // currentRate = 4.3;
  @Input('itemData') itemData: any;

  constructor(config: NgbRatingConfig, public authService: AuthService,
    private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    // console.log(this.itemData);

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
