import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    this.doctors = firestore.collection('Doctors').valueChanges();

  }

}
