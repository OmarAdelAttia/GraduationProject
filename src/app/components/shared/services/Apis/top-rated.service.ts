import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  constructor(private httpClient: HttpClient) { }

  getTopRated() {
    return this.httpClient.get('https://firestore.googleapis.com/v1/projects/neofit-project/databases/(default)/documents/TopRated');
  }
}
