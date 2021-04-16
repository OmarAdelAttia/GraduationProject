import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    this.courses = firestore.collection('Courses').valueChanges();

  }

}
