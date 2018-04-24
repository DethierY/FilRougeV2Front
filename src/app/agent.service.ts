import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Agent } from './model';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class AgentService {

  constructor( private http: HttpClient) { }


  createAgent(agent: Agent): Observable<Agent> {
    console.log('le create fonctionne');
    return this.http.post<Agent>(`http://localhost:8080/agent/create`, agent);
  }


  getAgents(): Observable<Agent[]> {
    console.log('le get fonctionne');
    return this.http.get(`http://localhost:8080/agent/list`) as Observable<Agent[]>;
  }

  getAgent(id: number): Observable<Agent> {
    console.log('id' + id);
    return this.http
      .get<Agent>('http://localhost:8080/agent/detail/' + id)
      .pipe(delay(500));
  }

  updateAgent(agent: Agent): Observable<Agent> {
    console.log('l\'appel à la méthode update fonctionne');
    return this.http.put<Agent>('http://localhost:8080/agent/edit/' +
    agent.id, agent, httpOptions) as Observable<Agent>;

  }

  deleteAgent(id: number): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/agent/delete/' + id)
    .pipe(delay(1000));
  }


}