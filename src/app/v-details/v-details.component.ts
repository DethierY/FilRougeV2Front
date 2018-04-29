import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Vehicule, Affaire } from '../model';
import { VehiculeService } from '../vehicule.service';
import { VehiculesComponent} from '../vehicules/vehicules.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-v-details',
  templateUrl: './v-details.component.html',
  styleUrls: ['./v-details.component.css']
})
export class VDetailsComponent implements OnInit {

  id: number;
  vehicule: Vehicule;
  affaire: Affaire;
  affaires: Affaire[];

  // Définition des colonnes du tableau de présentation
  colonnes = [ "dossier", "lieu", "date d'ouverture"]
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private vehiculeService: VehiculeService,
              private vehiculesComponent: VehiculesComponent,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtention du véhicule détaillé dans ce composant
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.vehiculeService.getVehicule(this.id).subscribe(
        vehicule => this.vehicule = vehicule
      );
      // Obtention de la liste des affaires dans lesquelles le véhicule est impliqué
      this.vehiculeService.getAffairesOfVehicule(this.id).subscribe(
        cases => {
          this.dataList = new MatTableDataSource(cases);
          this.dataList.paginator = this.paginator;
          this.dataList.sort = this.sort;
        }
      );
    });
  }

  // Suppression du véhicule détaillé dans ce composant
  deleteVehicule() {
    this.vehiculeService.deleteVehicule(this.vehicule.id).subscribe(
      () => {
        this.vehiculesComponent.ngOnInit();
        this.router.navigate([`../../../ehicules`], {relativeTo: this.route});
      }
    );
  }
}
