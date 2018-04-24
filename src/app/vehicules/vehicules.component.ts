import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {

  vehicules = new Array<Vehicule>();
  vehicule: Vehicule;

  colonnes = ['nom', 'prenom', 'taille'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  // vehicules = [
  //   {
  //     id: 1,
  //     type: 'Fourgonette',
  //     modele: 'Peugeot 3000',
  //     ajoute_le: new Date('1/1/16'),
  //   },
  //   {
  //     id: 2,
  //     type: 'Voiture',
  //     modele: 'Lada',
  //     ajoute_le: new Date('1/17/16'),
  //   },
  //   {
  //     id: 3,
  //     type: 'Bobsleig',
  //     modele: 'EquipeTchad',
  //     ajoute_le: new Date('1/28/16'),
  //   },
  //   {
  //     id: 4,
  //     type: 'Poussette',
  //     modele: 'McLaren',
  //     ajoute_le: new Date('1/3/12'),
  //   },
  //   {
  //     id: 5,
  //     type: 'Caddie',
  //     modele: 'Intermarché',
  //     ajoute_le: new Date('1/17/16'),
  //   },
  //   {
  //     id: 6,
  //     type: 'Monocycle',
  //     modele: 'Pinder',
  //     ajoute_le: new Date('1/28/16'),
  //   },
  //   {
  //     id: 7,
  //     type: 'Fourgonette',
  //     modele: 'Peugeot 3000',
  //     ajoute_le: new Date('1/1/16'),
  //   },
  //   {
  //     id: 8,
  //     type: 'Voiture',
  //     modele: 'Lada',
  //     ajoute_le: new Date('1/17/16'),
  //   },
  //   {
  //     id: 9,
  //     type: 'Bobsleig',
  //     modele: 'EquipeTchad',
  //     ajoute_le: new Date('1/28/16'),
  //   },
  //   {
  //     id: 10,
  //     type: 'Poussette',
  //     modele: 'McLaren',
  //     ajoute_le: new Date('1/3/12'),
  //   },
  //   {
  //     id: 11,
  //     type: 'Caddie',
  //     modele: 'Intermarché',
  //     ajoute_le: new Date('1/17/16'),
  //   },
  //   {
  //     id: 12,
  //     type: 'Monocycle',
  //     modele: 'Pinder',
  //     ajoute_le: new Date('1/28/16'),
  //   }
  // ];


  constructor(
    public appService: AppService,
     private route: ActivatedRoute,
     private router: Router,
     public vehiculeService: VehiculeService
    ) { }

  ngOnInit() {

    this.vehiculeService.getVehicules().subscribe( (data: Vehicule[]) => {
      this.vehicules = data;
    });


    this.appService.listerObjet().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      }
    );

  }

// une partie de la méthode pour accéder aux détails d'un véhicule, ici,
// j'appelle seulement l'id du vehicule pour tester
  afficherId(vehicule) {
    // this.router.navigate(['v-details/:id', vehicule.id]);
    this.router.navigate(['v-details', vehicule.id], {relativeTo: this.route});
  }
  afficherAjoutComponent() {
    this.router.navigate(['v-ajout'], {relativeTo: this.route});
  }

  afficherRechercheComponent() {
    this.router.navigate(['vrecherche-avancee'], {relativeTo: this.route});
  }


}
