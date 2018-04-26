import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Affaire } from './model';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class AffaireService {

  constructor( private http: HttpClient) { }


  createAffaire(affaire: Affaire): Observable<Affaire> {
    console.log('le create fonctionne');
    return this.http.post<Affaire>(`http://localhost:8080/affaire/create`, affaire);
  }


  getAffaires(): Observable<Affaire[]> {
    console.log('le get fonctionne');
    return this.http.get(`http://localhost:8080/affaire/list`) as Observable<Affaire[]>;
  }

  getAffaire(id: number): Observable<Affaire> {
    console.log('id' + id);
    return this.http
      .get<Affaire>('http://localhost:8080/affaire/detail/' + id)
      .pipe(delay(500));
  }

  updateAffaire(affaire: Affaire): Observable<Affaire> {
    console.log('l\'appel à la méthode update fonctionne');
    return this.http.put<Affaire>('http://localhost:8080/affaire/edit/' +
    affaire.id, affaire, httpOptions) as Observable<Affaire>;

  }

  deleteAffaire(id: number): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/affaire/delete/' + id)
    .pipe(delay(1000));
  }


}