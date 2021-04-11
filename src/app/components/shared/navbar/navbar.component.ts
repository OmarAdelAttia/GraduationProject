import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isCollapsed: boolean;

  constructor(private modalService: NgbModal, public authService: AuthService, public router: Router) {
    this.isCollapsed= true;
  }

  ngOnInit(): void {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
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

}

