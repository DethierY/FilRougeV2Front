import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { ArmeService } from '../arme.service';
import { Arme } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.css']
})
export class ArmesComponent implements OnInit {


  armes = new Array<Arme>();
  arme: Arme;

  colonnes = ['type', 'modele', 'num'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(
    public appService: AppService, private route: ActivatedRoute,
    private router: Router, public armeService: ArmeService
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
