import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainersService {


  trainers: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    this.trainers = firestore.collection('Trainers').valueChanges();

  }

}
