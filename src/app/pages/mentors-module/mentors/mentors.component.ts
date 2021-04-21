import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';
// RxJS v6+
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

export interface Doctor { name: string; price: number; }
export interface DoctorId extends Doctor { id: string; }

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})


export class MentorsComponent implements OnInit {

  doctorsList: any = [];
  goldDoctorsList: any = [];
  silverDoctorsList: any = [];
  bronzeDoctorsList: any = [];

  trainersList: any = [];
  goldTrainersList: any = [];
  silverTrainersList: any = [];
  bronzeTrainersList: any = [];

  show = {
    allDoctors : true,
    goldDoctors : false,
    silverDoctors : false,
    bronzeDoctors : false
  }

  display = {
    allTrainers : true,
    goldTrainers : false,
    silverTrainers : false,
    bronzeTrainers : false
  }


  constructor(private doctorsService: DoctorsService, private trainersService: TrainersService) { }

  ngOnInit(): void {

    this.doctorsService.doctors.subscribe(result => {
      this.doctorsList = result;
      console.log(this.doctorsList);

    });

    this.doctorsService.doctors.subscribe(result => {
      this.goldDoctorsList = result.filter(g => g.Category == 'Gold');
      console.log('g');
      console.log(this.goldDoctorsList);
    });

    this.doctorsService.doctors.subscribe(result => {
      this.silverDoctorsList = result.filter(s => s.Category == 'Silver');
      console.log('s');
      console.log(this.silverDoctorsList);
    });

    this.doctorsService.doctors.subscribe(result => {
      this.bronzeDoctorsList = result.filter(b => b.Category == 'Bronze');
      console.log('b');
      console.log(this.bronzeDoctorsList);
    });

    // TRAINERS
    this.trainersService.trainers.subscribe(result => {
      this.trainersList = result;
    });

    this.trainersService.trainers.subscribe(result => {
      this.goldTrainersList = result.filter(g => g.Category == 'Gold');
      console.log('g');
      console.log(this.goldTrainersList);
    });

    this.trainersService.trainers.subscribe(result => {
      this.silverTrainersList = result.filter(s => s.Category == 'Silver');
      console.log('s');
      console.log(this.silverTrainersList);
    });

    this.trainersService.trainers.subscribe(result => {
      this.bronzeTrainersList = result.filter(b => b.Category == 'Bronze');
      console.log('b');
      console.log(this.bronzeTrainersList);
    });
  }



  owlData(e: SlidesOutputData) {
    console.log(e);
  }

  owlOptions: OwlOptions = {
    loop: true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 750,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: false
  }

}


