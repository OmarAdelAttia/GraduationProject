import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { TopRatedService } from '../../../components/shared/services/Apis/top-rated.service';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  activeId;
  mentor;

  constructor(private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public topRatedService: TopRatedService,
    private doctorsService: DoctorsService,
    private trainersService: TrainersService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activeId = params;
      console.log(params.id);


      this.doctorsService.getDoctor(params.id).subscribe(doctor => {
        this.mentor = doctor;
        // console.log(doctor)
        console.log(this.mentor)
      });

      this.trainersService.getTrainer(params.id).subscribe(trainer => {
        this.mentor = trainer;
        // console.log(trainer)
        // console.log(this.mentor)
      });

      this.topRatedService.getTopRated(params.id).subscribe(topRated => {
        this.mentor = topRated;
        // console.log(topRated)
        console.log(this.mentor)
      });
    })
      // console.log(this.activeId);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  userCheckOutForm(checkOutForm) {
    console.log(checkOutForm);
  }


}
