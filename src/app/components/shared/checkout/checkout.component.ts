import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';


import { TopRatedService } from '../../../components/shared/services/Apis/top-rated.service';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

mentors;
  constructor(private modalService: NgbModal,
    private store: Store<{ list }>,
    public topRatedService: TopRatedService,
    private doctorsService: DoctorsService,
    private trainersService: TrainersService,) { }

  ngOnInit(): void {
    this.store.select('list').subscribe((data) => {
      this.mentors = data;
    })
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  userCheckOutForm(checkOutForm) {
    console.log(checkOutForm);
  }


}
