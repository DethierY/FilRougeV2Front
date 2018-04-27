import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../model';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { VehiculesComponent} from '../vehicules/vehicules.component';

@Component({
  selector: 'app-v-ajout',
  templateUrl: './v-ajout.component.html',
  styleUrls: ['./v-ajout.component.css']
})
export class VAjoutComponent implements OnInit {

  vehicule: Vehicule = new Vehicule();
  id: number;
  editing: boolean;

  // valeurs de la liste déroulante de type de véhicule
  listTypeVehicule = [
    {value: 'voiture', viewValue: 'voiture'},
    {value: 'moto', viewValue: 'moto'},
    {value: 'scooter', viewValue: 'scooter'},
    {value: 'camion', viewValue: 'camion'},
    {value: 'camionnette', viewValue: 'camionnette'},
    {value: 'autocar', viewValue: 'autocar'}
  ];

  constructor(private vehiculeService: VehiculeService,
              private vehiculesComponent: VehiculesComponent,
              private  router: Router,
              private  route: ActivatedRoute) { }

  ngOnInit() {
    // si le composant est appelé depuis le bouton de création, le formulaire est vide
    // si le composant est appelé depuis l'affichage d'un véhicule, le formulaire est prérempli
    const urlSegment = this.route.snapshot.url[0];
    if (urlSegment && urlSegment.path !== 'create') {
      this.id = +this.route.snapshot.paramMap.get('id');
        this.vehiculeService.getVehicule(this.id).subscribe(
          vehicule => this.vehicule = vehicule
        );
      this.editing = true;
    } else {
      this.editing = false;
    }
  }

  onSubmit() {
    // si on est en édition, édite le véhicule avec les données du formulaire
    // puis renvoie vers la fiche du véhicule avec les données modifiées
    // si on est en création, crée un véhicule avec les données du formulaire,
    // puis renvoie vers sa fiche détaillée.
    // Dans les deux cas, remet l'affichage de la liste à jour
    if (this.editing) {
      this.vehiculeService.updateVehicule(this.vehicule).subscribe(
        () => {
          this.vehiculesComponent.ngOnInit();
          this.router.navigate([`../../detail/` + this.vehicule.id], {relativeTo: this.route});
        }
      );
    } else {
      console.log('immatriculation de this.vehicule: ' + this.vehicule.immatriculation);
      this.vehiculeService.createVehicule(this.vehicule).subscribe(
        newVehicule => {
          console.log('immatriculation de newVehicule: ' + newVehicule.immatriculation);
          this.vehiculesComponent.ngOnInit();
          this.router.navigate([`../detail/` + newVehicule.id], {relativeTo: this.route});
        }
      );
    }
  }
}
