import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';
// RxJS v6+
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private doctorsService: DoctorsService, private trainersService: TrainersService) { }

  ngOnInit(): void {

    this.doctorsService.doctors.subscribe(result => {
      this.doctorsList = result;
      // console.log(result);
    })


    this.trainersService.trainers.subscribe(result => {
      this.trainersList = result;
      // console.log(this.trainersList);
    })
  }
  all(){
    console.log(this.doctorsList);
  }
  goldDoctors() {
    this.goldDoctorsList = this.doctorsList.filter(g => g.Category == 'Gold');
    console.log('g');
    console.log(this.goldDoctorsList);
  }
  silverDoctors(){
    this.silverDoctorsList = this.doctorsList.filter(s => s.Category == 'Silver')
    console.log('s');
    console.log(this.silverDoctorsList);
  }
  bronzeDoctors(){
    this.bronzeDoctorsList = this.doctorsList.filter(b => b.Category == 'Bronze')
    console.log('b');
    console.log(this.bronzeDoctorsList);
  }

  }


