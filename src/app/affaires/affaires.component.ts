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

  colonnes = ['dossier', 'lieu', 'dateOuverture','actions','action'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public appService: AppService, private route: ActivatedRoute,
    private router: Router, public affaireService: AffaireService
  ) { }

  ngOnInit() {
    this.affaireService.getAffaires().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      }
    );
  }


  filtrerTableau(valeur: string) {
    valeur= valeur.trim();
    valeur=valeur.toLowerCase();
    this.dataList.filter=valeur; 
  }

  afficherId(id) {
    this.router.navigate(['detail', id], {relativeTo: this.route});
  }

  supprimerId(id) {
    this.affaireService.deleteAffaire(id).subscribe(
      ()=>{
        this.ngOnInit();
        this.router.navigate([''], {relativeTo: this.route});
      }
    );
  }

}
