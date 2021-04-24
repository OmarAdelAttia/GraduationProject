import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { TopRatedService } from '../../../components/shared/services/Apis/top-rated.service';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';

import { AuthService } from '../../../components/shared/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';
import { hireMentor } from '../../../components/shared/services/hiring/hire.action';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})
export class MentorDetailsComponent implements OnInit {

  activeId;
  mentor;
  // doctorsList: any = [];
  // doctorDoc: any;
  // doctor: any;
  // doctors: Observable<any[]>;


mentors;

  constructor(
    config: NgbRatingConfig,
    private store: Store<{ list }>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public topRatedService: TopRatedService,
    private doctorsService: DoctorsService,
    private trainersService: TrainersService,
    private angularFirestore: AngularFirestore) {
    // this.doctorDoc = angularFirestore.doc('items/1');
    // this.doctor = this.doctorDoc.valueChanges();
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activeId = params;
      this.doctorsService.getDoctor(params.id).subscribe(doctor => {
        this.mentor = doctor;
        // console.log(doctor)
        // console.log(this.mentor)
      });





      this.trainersService.getTrainer(params.id).subscribe(trainer => {
        this.mentor = trainer;
        console.log(trainer)
        console.log(this.mentor)
      });



      this.topRatedService.getTopRated(params.id).subscribe(topRated => {
        this.mentor = topRated;
        // console.log(topRated)
        // console.log(this.mentor)
      });

      // console.log(this.activeId);

      // this.doctors = this.angularFirestore.collection('Doctors').doc(this.activeId).snapshotChanges().pipe(
      //   map(actions => actions.map(a => {
      //     const data = a.payload.doc.data() as Object;
      //     const id = a.payload.doc.id;
      //     return { id, ...data };
      //   }))
      // );

      // console.log(params.id);
      // console.log(this.activeId);
      // this.activeId = params.id;
    });
    // this.doctorsService.doctors.subscribe(result => {
    //   console.log(result);


    // })

    this.store.select('list').subscribe((data) => {
      this.mentors = data;
    })

  }

  hireTheMentor(prof) {
    this.mentors.hireList.find(m => m.id == prof.id);
    this.store.dispatch(new hireMentor(prof));
    this.router.navigate(['./checkout'])
  }

  // toCheckout() {
  //   if (!this.authService.isLoggedIn) {
  //     this.router.navigate(['sign-in']);
  //     return false;
  //   } else {
  //     this.router.navigate(['./checkout'])
  //     return true;
  //   }

  // }

}
