// import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';
// import { HostListener } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })

// @HostListener('window:scroll', ['$event'])

// export class NavbarComponent implements OnInit {
//   isCollapsed: boolean;
//   constructor(private modalService: NgbModal, public authService: AuthService, public router: Router) {
//     this.isCollapsed= true;
//   }

//   ngOnInit(): void {
//   }

//   openVerticallyCentered(content) {
//     this.modalService.open(content, { centered: true });
//   }


//   navigateToProfile() {
//     const roles = JSON.parse(localStorage.getItem('roles'))
//     const userRole = roles.find( role => role.userId === JSON.parse(localStorage.getItem('user')).uid).role;
//     if(userRole === "client") {
//       this.router.navigate(['./client'])
//     } else {
//       this.router.navigate(['./mentor'])
//     }
//   }

//   onWindowScroll(e) {
//     let element = document.querySelector('.navbar');
//     if (window.pageYOffset > element.clientHeight) {
//       element.classList.add('bg-customColor');
//     } else {
//       element.classList.remove('bg-customColor');
//     }
//   }

// }


import { Component, HostListener, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isScrolled= false;
  isCollapsed:boolean;

  constructor( public authService: AuthService, public router: Router) {
    this.isCollapsed= true;
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  @HostListener("window:scroll")
  scrollEvent() {
    window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
