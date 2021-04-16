import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';
// RxJS v6+
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})

export class MentorsComponent implements OnInit {

  doctorsList: any = [];
  trainersList: any = [];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private doctorsService: DoctorsService, private trainersService: TrainersService) { }

  ngOnInit(): void {

    this.doctorsService.doctors.subscribe(result => {
      this.doctorsList = result;
      console.log(this.doctorsList);
    })


    this.trainersService.trainers.subscribe(result => {
      this.trainersList = result;
      console.log(this.trainersList);
    })
  }

}

