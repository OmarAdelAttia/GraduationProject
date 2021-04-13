import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  doctorsList: any = [];
  trainersList: any = [];
  results: any = [];
  resultsArray: any = [];

  constructor(private doctorsService: DoctorsService, private trainersService: TrainersService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctor().subscribe(result => {
      this.results = result;

      let list = [0, 1, 2, 3];
      for (let i in list) {
        this.resultsArray = this.results.documents[i].fields;
        this.doctorsList.push(this.resultsArray);
        console.log(this.doctorsList);
      }

      // this.resultsArray = this.results.documents[0].fields.Specialized.stringValue;
      // this.resultsArray = this.results.documents;
      // this.doctorsList = this.resultsArray;
      // console.log(this.doctorsList);
    })
    // this.trainersService.getTrainer().subscribe(result => {
    //   this.trainersList = this.resultsArray;
    //   console.log(this.trainersList.documents);
    // })

    // let list = [0, 1, 2, 3];
    // for (let i in list) {
    //   console.log(i); // "0", "1", "2",
    // }
  }

}
