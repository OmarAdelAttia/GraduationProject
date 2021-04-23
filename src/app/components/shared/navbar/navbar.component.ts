import { Component, HostListener, OnInit } from "@angular/core";
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

//search bar
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isScrolled = true;
  isCollapsed: boolean;

  //search bar
  searchValue: string = "";
  results: any;

items;
  constructor(public authService: AuthService,
     public router: Router, public angularFirestore: AngularFirestore,
     private store: Store<{cart}>) {
    this.isCollapsed = true;
  }
  ngOnInit(): void {
    this.items = this.store.select('cart');
       }

  //search bar
  search() {
    // console.log(this.searchValue);
    this.results = this.angularFirestore
      .collection(`Doctors`, ref => ref
        .where('Name', '>=', this.searchValue)
        .where('Name', '<=', this.searchValue))
      .valueChanges();
  }


  navigateToProfile() {
    const roles = JSON.parse(localStorage.getItem('roles'))
    const userRole = roles.find(role => role.userId === JSON.parse(localStorage.getItem('user')).uid).role;
    if (userRole === "client") {
      this.router.navigate(['./client'])
    } else {
      this.router.navigate(['./mentor'])
    }
  }

  @HostListener("window:scroll")
  scrollEvent() {
    //window.pageYOffset >= 100 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
