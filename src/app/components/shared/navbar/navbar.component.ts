import { Component, HostListener, OnInit } from "@angular/core";
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { DoctorsService } from '../services/Apis/doctors.service';
import { TrainersService } from '../services/Apis/trainers.service';
import { ShoppingItemsService } from '../services/Apis/shopping-items.service';
import { CoursesService } from '../services/Apis/courses.service';


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
  // category: string = "doctors";
  category: string = "keyword";

  categories = {
    doctors: [],
    trainers: [],
    courses: [],
    supplements: [],
  }

  routeMaping = {
    doctors: 'mentor-details',
    trainers: 'mentor-details',
    courses: 'course-details',
  }



  dataList: any = [];
  filteredDataList: any = [];

  constructor(
    public authService: AuthService,
    public router: Router,
    public angularFirestore: AngularFirestore,
    private doctorsService: DoctorsService,
    private trainersService: TrainersService,
    private coursesService: CoursesService,
    private shoppingItemsService: ShoppingItemsService,
    private store: Store<{cart}>) {
    this.isCollapsed = true;

  }
  ngOnInit(): void {

    this.doctorsService.doctors.subscribe(doctors => this.categories.doctors = doctors);
    this.trainersService.trainers.subscribe(trainers => this.categories.trainers = trainers);
    this.shoppingItemsService.shoppingItems.subscribe(supplements => this.categories.supplements = supplements);
    this.coursesService.courses.subscribe(courses => this.categories.courses = courses);


    this.items = this.store.select('cart');
  }
  items;


  //search bar
  search() {
    const searchedItem = this.categories[this.category].find((item) => item.Name.toLowerCase().includes(this.searchValue.toLocaleLowerCase()))

    if (!searchedItem) return alert('What you are looing for is  not found');

    const { id } = searchedItem;

    const redirectTo = `${this.routeMaping[this.category]}/${id}`;
    this.router.navigate([redirectTo])
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
