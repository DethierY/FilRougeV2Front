import { Component, OnInit } from '@angular/core';
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

  colonnes = ['type', 'marque', 'immatriculation', 'detail'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     public vehiculeService: VehiculeService
    ) { }

  ngOnInit() {

    // Obtenir le liste de véhicule et la liée au tableau
    this.vehiculeService.getVehicules().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      }
    );
  }

  // Fonction de filtrage du tableau de véhicules
  filtrerTableau(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataList.filter = filterValue;
  }

  // Redirection vers la fiche d'un véhicule
  afficherDetailVehicule(id) {
    this.router.navigate(['detail', id], {relativeTo: this.route});
  }
}
