import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
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

  // getTopCourses() {

  // return this.firestore.collection('TopCourses').valueChanges();

  //   return this.httpClient.get('https://firestore.googleapis.com/v1/projects/neofit-project/databases/(default)/documents/TopCourses');

  // }

}
