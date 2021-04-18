import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    // this.courses = firestore.collection('Courses').valueChanges();

    this.courses = firestore.collection('Courses').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

}
