import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Victime } from './model';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class VictimeService {

  constructor( private http: HttpClient) { }


  createVictime(victime: Victime): Observable<Victime> {
    console.log('le create fonctionne');
    return this.http.post<Victime>(`http://localhost:8080/victime/create`, victime);
  }


  getVictimes(): Observable<Victime[]> {
    console.log('le get fonctionne');
    return this.http.get(`http://localhost:8080/victime/list`) as Observable<Victime[]>;
  }

  getVictime(id: number): Observable<Victime> {
    console.log('id' + id);
    return this.http
      .get<Victime>('http://localhost:8080/victime/detail/' + id)
      .pipe(delay(500));
  }

  updateVictime(suspect: Victime): Observable<Victime> {
    console.log('l\'appel à la méthode update fonctionne');
    return this.http.put<Victime>('http://localhost:8080/victime/edit/' +
    suspect.id, suspect, httpOptions) as Observable<Victime>;

  }

  deleteVictime(id: number): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/victime/delete/' + id)
    .pipe(delay(1000));
  }

}