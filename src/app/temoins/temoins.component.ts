import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { TemoinService } from '../temoin.service';
import { Temoin } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-temoins',
  templateUrl: './temoins.component.html',
  styleUrls: ['./temoins.component.css']
})
export class TemoinsComponent implements OnInit {


  temoins = new Array<Temoin>();
  temoin: Temoin;

  colonnes = ['nom', 'prenom', 'date'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public appService: AppService, private route: ActivatedRoute,
    private router: Router, public temoinService: TemoinService
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

  afficherId(arme) {
    this.router.navigate(['/detail/:id', arme.id], {relativeTo: this.route});
  }

}
