import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Temoin } from './model';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class TemoinService {

  constructor( private http: HttpClient) { }


  createTemoin(temoin: Temoin): Observable<Temoin> {
    console.log('le create fonctionne');
    return this.http.post<Temoin>(`http://localhost:8080/temoin/create`, temoin);
  }


  getTemoins(): Observable<Temoin[]> {
    console.log('le get fonctionne');
    return this.http.get(`http://localhost:8080/temoin/list`) as Observable<Temoin[]>;
  }

  getTemoin(id: number): Observable<Temoin> {
    console.log('id' + id);
    return this.http
      .get<Temoin>('http://localhost:8080/temoin/detail/' + id)
      .pipe(delay(500));
  }

  updateTemoin(temoin: Temoin): Observable<Temoin> {
    console.log('l\'appel à la méthode update fonctionne');
    return this.http.put<Temoin>('http://localhost:8080/temoin/update/' +
    temoin.id, temoin, httpOptions) as Observable<Temoin>;

  }

  // deleteTemoin(id: number): Observable<any> {
  //   console.log('le delete fonctionne');
  //   return this.http.delete<any>('http://localhost:8080/temoin/delete/' + id)
  //   .pipe(delay(1000));
  // }

  deleteTemoin(temoin: Temoin): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/temoin/delete/' + temoin.id)
    .pipe(delay(1000));
  }
}
