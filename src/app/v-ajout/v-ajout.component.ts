import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../vehicule.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Vehicule } from '../model';
import { VehiculesComponent } from '../vehicules/vehicules.component';
// import { Affaire } from '../affaire';
// import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-v-ajout',
  templateUrl: './v-ajout.component.html',
  styleUrls: ['./v-ajout.component.css']
})

export class VAjoutComponent implements OnInit {


    // affaire: Affaire;
    vehicule = new Vehicule();
    editing: boolean;

  constructor(
    private vehiculesComponent: VehiculesComponent,
    private vehiculeService: VehiculeService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {
    this.vehiculeService.createVehicule(this.vehicule)
    .subscribe( () => {
      this.vehiculesComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }

  }

