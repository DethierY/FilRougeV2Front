import { Injectable } from '@angular/core';
import { Suspect } from './model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  selectedMenu = '';
  private url = 'http://localhost:8080/';

  suspect: Suspect;
  selectedSuspect: Suspect;


  constructor(private http: HttpClient) { }

  listerObjet(): Observable<Suspect[]> {
    return this.http.get<Suspect[]>(this.url + 'adherents') as Observable<Suspect[]>;
  }
}
