import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class TrainersService {

  trainers: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {

    // this.trainers = firestore.collection('Trainers').valueChanges();

    this.trainers = firestore.collection('Trainers').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getTrainer(id) {
    return this.firestore.collection('Trainer').doc(id).valueChanges()
  }

}
