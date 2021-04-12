import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourse() {
    return this.httpClient.get('https://firestore.googleapis.com/v1/projects/neofit-project/databases/(default)/documents/Courses');
  }
}
