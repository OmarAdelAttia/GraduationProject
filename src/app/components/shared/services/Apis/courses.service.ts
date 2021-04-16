import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
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

  // getCourse() {
  //   return this.httpClient.get('https://firestore.googleapis.com/v1/projects/neofit-project/databases/(default)/documents/Courses');
  // }

}
