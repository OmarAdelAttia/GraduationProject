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

  topRatedList: any = [];
  trainersList: any = [];
  // results: any = [];
  // resultsArray: any = [];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private doctorsService: DoctorsService, private trainersService: TrainersService) { }

  ngOnInit(): void {

    this.doctorsService.doctors.subscribe(result => {
      this.topRatedList = result;
      console.log(result);
    })
    //   this.doctorsService.getDoctor().subscribe(result => {
    //     this.results = result;

    //     let list = [0, 1, 2, 3];
    //     for (let i in list) {
    //       this.resultsArray = this.results.documents[i].fields;
    //       this.doctorsList.push(this.resultsArray);
    //       console.log(this.doctorsList);
    //     }

    //     // of(1, 2, 3, 4).pipe(map((v) => v + 10)).subscribe(console.log)

    //     // this.doctorsService.getDoctor().pipe(
    //     //   map((res: any) =>
    //     //     res.map((data) => {
    //     //       return {
    //     //         category: data.Category,
    //     //       }
    //     //     })
    //     //   )
    //     // ).subscribe(console.log)

    //     // this.resultsArray = this.results.documents[0].fields.Specialized.stringValue;
    //     // this.resultsArray = this.results.documents;
    //     // this.doctorsList = this.resultsArray;
    //     // console.log(this.doctorsList);
    //   })
    //   // this.trainersService.getTrainer().subscribe(result => {
    //   //   this.trainersList = this.resultsArray;
    //   //   console.log(this.trainersList.documents);
    //   // })

    //   // let list = [0, 1, 2, 3];
    //   // for (let i in list) {
    //   //   console.log(i); // "0", "1", "2",
    //   // }

    this.trainersService.trainers.subscribe(result => {
      this.trainersList = result;
      console.log(result);
    })
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   // selector: 'ngbd-nav-keep',
//   selector: 'app-mentors',
//   // templateUrl: './nav-keep-content.html'
//   templateUrl: './mentors.component.html',
// })

// export class MentorsComponent implements OnInit {
//   // export class NgbdNavKeep {
//   ngOnInit(): void {
//     // active = 1;
//     active = 'top';
//   }
// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   // selector: 'ngbd-nav-vertical',
//   selector: 'app-mentors',
//   // templateUrl: './nav-vertical.html'
//   templateUrl: './mentors.component.html',
// })
// export class MentorsComponent implements OnInit {
//   // export class NgbdNavVertical {
//   ngOnInit(): void {
//     const active = 'top';
//   }
// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   // selector: 'ngbd-nav-markup',
//   selector: 'app-mentors',
//   // templateUrl: './nav-markup.html'
//   templateUrl: './mentors.component.html',
// })
// export class MentorsComponent implements OnInit {
//   // export class NgbdNavMarkup { }
//   constructor() { }
//   ngOnInit(): void {
//   }

// }
