import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Vehicule } from './model';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class VehiculeService {

  constructor(private http: HttpClient) { }


  createVehicule(vehicule: Vehicule): Observable<Vehicule> {
    console.log('le create fonctionne');
    return this.http.post<Vehicule>(`http://localhost:8080/vehicule/create`, vehicule);
  }


  getVehicules(): Observable<Vehicule[]> {
    console.log('le get fonctionne');
    return this.http.get(`http://localhost:8080/vehicule/list`) as Observable<Vehicule[]>;
  }

  getVehicule(id: number): Observable<Vehicule> {
    console.log('id' + id);
    return this.http
      .get<Vehicule>('http://localhost:8080/vehicule/detail/' + id)
      .pipe(delay(500));
  }

  updateVehicule(vehicule: Vehicule): Observable<Vehicule> {
    console.log('l\'appel à la méthode update fonctionne');
    return this.http.put<Vehicule>('http://localhost:8080/vehicule/edit/' +
    vehicule.id, vehicule, httpOptions) as Observable<Vehicule>;

  }

  deleteVehicule(id: number): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/vehicule/delete/' + id)
    .pipe(delay(1000));
  }

}
