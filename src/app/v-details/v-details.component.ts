import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../model';
import { NgForm } from '@angular/forms';
import {VehiculesComponent } from '../vehicules/vehicules.component';


@Component({
  selector: 'app-v-details',
  templateUrl: './v-details.component.html',
  styleUrls: ['./v-details.component.css']
})
export class VDetailsComponent implements OnInit {

   public vehiculesId;



  vehiculeId: number;
  vehicule = new Vehicule(); // objet

   constructor(
     private vehiculeComponent: VehiculesComponent,
    private route: ActivatedRoute,
    private router: Router,
    private vehiculeService: VehiculeService,
    ) { }



  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id'));
      this.vehiculeId = +this.route.snapshot.paramMap.get('id');

      this.vehiculeService
      .getVehicule(this.vehiculeId)
      .subscribe(
        vehicule => (this.vehicule = vehicule),
     );
    });
      }


      deleteVehicule() {
        this.vehiculeService.deleteVehicule(this.vehicule.id).subscribe(
          () => {
            this.router.navigate(['../../'], {
              relativeTo: this.route
            });
          },
          err => {
            console.log(err);
          }
        );
      }


    updateVehicule(form: NgForm) {
      console.log(this.vehicule);
      this.vehiculeService.updateVehicule(this.vehicule).subscribe(
        () => {
          this.vehiculeComponent.ngOnInit();
          this.router.navigate(['/vehicule'], {
          });
        },
      );

    }

}
