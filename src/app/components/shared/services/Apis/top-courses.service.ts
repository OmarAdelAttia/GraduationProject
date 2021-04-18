import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopCoursesService {

  topCourses: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.topCourses = firestore.collection('TopCourses').valueChanges();
  }

}
