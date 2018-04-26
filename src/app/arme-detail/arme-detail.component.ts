import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { ArmeService } from '../arme.service';
import { Arme } from '../model';
import { NgForm } from '@angular/forms';
import { ArmesComponent } from '../armes/armes.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-arme-detail',
  templateUrl: './arme-detail.component.html',
  styleUrls: ['./arme-detail.component.css']
})
export class ArmeDetailComponent implements OnInit {


  armeId: number;
  arme: Arme; // objet

  constructor(
    private armeComponent: ArmesComponent,
    private route: ActivatedRoute,
    private router: Router,
    private armeService: ArmeService,
  ) { }

  ngOnInit() { // lancement du composant detail
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id')); // recuperer le dernier param de l'url
      this.armeId = +this.route.snapshot.paramMap.get('id');

      this.armeService
      .getArme(this.armeId)
      .subscribe(
        arme => (this.arme = arme),
     );
    });
  }

//   deleteArme() {
//     this.armeService.deleteArme(this.arme.id).subscribe(
//       () => {
//         this.router.navigate(['../../'], {
//           relativeTo: this.route
//         });
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }


// updateArme(form: NgForm) {
//   console.log(this.arme);
//   this.armeService.updateArme(this.arme).subscribe(
//     () => {
//       this.armeComponent.ngOnInit();
//       this.router.navigate(['/arme'], {
//       });
//     },
//   );

// }

updateArme(form: NgForm) {
  console.log(this.arme);
  this.armeService.updateArme(this.arme).subscribe(
    () => {
      this.armeComponent.ngOnInit();
      // this.router.navigate(['/temoin'],{
      // });
    },
  );

}

// deleteTemoin(id) {
//   this.temoinService.deleteTemoin(this.temoin).subscribe(
//     () => {
//       this.temoinComponent.ngOnInit();
//       this.router.navigate(['/temoins'], {
//       });
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }

}
