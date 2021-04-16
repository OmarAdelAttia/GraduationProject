import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  topRated: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    this.topRated = firestore.collection('TopRated').valueChanges();

  }

  // getTopRated() {

  // return this.firestore.collection('TopRated').valueChanges();

  //   return this.httpClient.get('https://firestore.googleapis.com/v1/projects/neofit-project/databases/(default)/documents/TopRated');

  // }

}
