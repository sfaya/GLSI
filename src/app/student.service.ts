import { Injectable } from '@angular/core';
import { Student } from './studentModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
}

)
export class StudentService {

  public url = 'https://glsib-60e4c.firebaseio.com/profiles.json';
  profiles: any[];

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
  };


  constructor(private http: HttpClient, private messageService: MessageService) { }


  saveProfileToServer(s: Student) {
    this.http
      .post(this.url, s, this.httpOptions)
      .subscribe(
        () => {
          console.log('Profile Saved !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


  saveProfilesToServer(s: Student[]) {
    this.http
      .put(this.url, s, this.httpOptions)
      .subscribe(
        () => {
          console.log('All profiles saved !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getProfilesFromServer() {
    this.http
      .get<Student[]>(this.url)
      .subscribe(
        (response) => {
          this.profiles = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteProfile(id: number) {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }


  /*
    addStudent(s: Student) {
      return this.http.post<Student>(this.url, s)
        .pipe(
          tap((newStudent: Student) => this.log(`added student w/ id=${newStudent.id}`)),
          catchError(this.handleError<Student>('addStudent'))
        );
    }
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any) => {
      console.error(error);
    };
  }


}






