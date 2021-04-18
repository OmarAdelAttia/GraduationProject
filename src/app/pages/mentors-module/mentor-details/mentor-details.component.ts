import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { TopRatedService } from '../../../components/shared/services/Apis/top-rated.service';
import { DoctorsService } from '../../../components/shared/services/Apis/doctors.service';
import { TrainersService } from '../../../components/shared/services/Apis/trainers.service';

import { AuthService } from '../../../components/shared/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})
export class MentorDetailsComponent implements OnInit {

  activeId;
  // doctorsList: any = [];
  // doctorDoc: any;
  // doctor: any;
  // doctors: Observable<any[]>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public topRatedService: TopRatedService,
    private doctorsService: DoctorsService,
    private trainersService: TrainersService,
    private angularFirestore: AngularFirestore) {
    // this.doctorDoc = angularFirestore.doc('items/1');
    // this.doctor = this.doctorDoc.valueChanges();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activeId = params;
      this.doctorsService.getDoctor(params.id).subscribe(doctor => console.log(doctor));
      this.trainersService.getTrainer(params.id).subscribe(trainer => console.log(trainer));
      this.topRatedService.getTopRated(params.id).subscribe(topRated => console.log(topRated));
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



  }

  toCheckout() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['sign-in']);
      return false;
    } else {
      this.router.navigate(['./checkout'])
      return true;
    }

  }

}
