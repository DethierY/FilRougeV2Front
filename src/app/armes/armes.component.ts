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


  // armes = new Array<Arme>();
  arme: Arme;
  armes: Arme[]; // comme ligne commentaire, tableau

  // colonnes = ['type', 'modele', 'editer', 'supprimer'];
  colonnes = ['type', 'modele', 'editer'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(
    private route: ActivatedRoute, // permet de manipuler l'url
    private router: Router, // pour gerer la navigation
    public armeService: ArmeService
  ) { }

  // se genere ou declanche a la creation
  ngOnInit() {

    this.armeService.getArmes().subscribe(
      data => {
        this.dataList = new MatTableDataSource(data);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      }
    );
  }

  afficherId(id) {
    console.log('l id est' + id);
   // recuperer une arme grace à son id
    this.router.navigate(['detail', id], {relativeTo: this.route});
  }

  supprimerId(id) {
  this.armeService.deleteArme(id).subscribe(
  () => {
    this.ngOnInit();
    this.router.navigate([''], {relativeTo: this.route});
  }
);
  }

  filtrerTableau(filterValue: string) {
    filterValue = filterValue.trim(); // enleve les espaces
    filterValue = filterValue.toLowerCase();
    this.dataList.filter = filterValue;
  }

}
