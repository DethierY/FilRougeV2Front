import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { AffaireService } from '../affaire.service';
import { Affaire } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-affaires',
  templateUrl: './affaires.component.html',
  styleUrls: ['./affaires.component.css']
})
export class AffairesComponent implements OnInit {

  affaires = new Array<Affaire>();
  affaire: Affaire;

  colonnes = ['nom', 'prenom', 'taille'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public appService: AppService, private route: ActivatedRoute,
    private router: Router, public affaireService: AffaireService
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

  afficherId(affaire) {
    this.router.navigate(['/detail/:id', affaire.id], {relativeTo: this.route});
  }
}
