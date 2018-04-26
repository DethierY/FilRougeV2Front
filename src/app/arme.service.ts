import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Arme } from './model';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class ArmeService {

  constructor( private http: HttpClient) { }


  createArme(arme: Arme): Observable<Arme> {
    console.log('le create fonctionne');
    return this.http.post<Arme>(`http://localhost:8080/arme/create`, Arme);
  }


  getArmes(): Observable<Arme[]> {
    console.log('le get fonctionne');
    // return this.http.get(`http://localhost:8080/arme/list`) as Observable<Arme[]>;
    return this.http.get<Arme[]>(`http://localhost:8080/arme/list`); // equivalent

  }

  getArme(id: number): Observable<Arme> {
    console.log('id' + id);
    return this.http
      .get<Arme>('http://localhost:8080/arme/detail/' + id)
      .pipe(delay(500));
  }

  updateArme(arme: Arme): Observable<Arme> {
    console.log('l\'appel à la méthode update fonctionne');
    return this.http.put<Arme>('http://localhost:8080/arme/update/' +
    arme.id, arme, httpOptions) as Observable<Arme>;

  }

  deleteArme(id: number): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/arme/delete/' + id)
    .pipe(delay(1000));
  }


}
