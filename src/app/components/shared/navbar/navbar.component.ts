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

  constructor(private modalService: NgbModal, public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


  fun() {
    debugger
    const role = localStorage.getItem('role')
    if(role === "client") {
      this.router.navigate(['./client'])
    } else {
      this.router.navigate(['./mentor'])
    }
  }

}

