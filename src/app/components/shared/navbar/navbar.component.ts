import { Component, HostListener, OnInit } from "@angular/core";
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isScrolled = true;
  isCollapsed: boolean;

  constructor(public authService: AuthService, public router: Router) {
    this.isCollapsed = true;
  }
  ngOnInit(): void {
  }

  navigateToProfile() {
    const roles = JSON.parse(localStorage.getItem('roles'))
    const userRole = roles.find( role => role.userId === JSON.parse(localStorage.getItem('user')).uid).role;
    if(userRole === "client") {
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
