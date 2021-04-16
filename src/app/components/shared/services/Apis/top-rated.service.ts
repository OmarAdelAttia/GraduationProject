import { Injectable } from '@angular/core';
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

}
