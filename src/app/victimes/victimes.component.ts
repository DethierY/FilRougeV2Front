import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { VictimeService } from '../victime.service';
import { Victime } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-victimes',
  templateUrl: './victimes.component.html',
  styleUrls: ['./victimes.component.css']
})
export class VictimesComponent implements OnInit {

  victimes = new Array<Victime>();
  victime: Victime;

  colonnes = ['nom', 'prenom', 'taille'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public appService: AppService, private route: ActivatedRoute,
    private router: Router, public victimeService: VictimeService
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
  afficherId(victime) {
    this.router.navigate(['/detail/:id', victime.id], {relativeTo: this.route});
  }

}
