import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { AgentService } from '../agent.service';
import { Agent } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  agents = new Array<Agent>();
  agent: Agent;

  colonnes = ['nom', 'prenom', 'taille'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public appService: AppService, private route: ActivatedRoute,
    private router: Router, public agentService: AgentService
  ) { }

  ngOnInit() {

    this.appService.listerObjet().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      }
    );
  }

  afficherId(agent) {
    this.router.navigate(['/detail/:id', agent.id], {relativeTo: this.route});
  }

}
