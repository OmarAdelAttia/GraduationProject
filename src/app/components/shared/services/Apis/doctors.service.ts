import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {

    // this.doctors = firestore.collection('Doctors').valueChanges();

    this.doctors = this.firestore.collection('Doctors').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getDoctor(id) {
    return this.firestore.collection('Doctors').doc(id).valueChanges()
  }

}