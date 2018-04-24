import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { SuspectService } from '../suspect.service';
import { Suspect } from '../model';
import { NgForm } from '@angular/forms';
import { SuspectsComponent } from '../suspects/suspects.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-suspect-details',
  templateUrl: './suspect-details.component.html',
  styleUrls: ['./suspect-details.component.css']
})
export class SuspectDetailsComponent implements OnInit {

  couleurCheveux = [
    {value: 'blond-O', viewValue: 'Blond'},
    {value: 'brun-1', viewValue: 'Brun'},
    {value: 'chauve-2', viewValue: 'Chauve'}
  ];

  couleurPeau = [
    {value: 'blanc-O', viewValue: 'Blanc'},
    {value: 'marron-1', viewValue: 'Marron'},
    {value: 'noir-2', viewValue: 'Noir'}
  ];

  suspectId: number;
  suspect = new Suspect(); // objet

  colonnes = ['nom', 'lieu', 'date'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private suspectComponent: SuspectsComponent,
    private route: ActivatedRoute,
    private router: Router,
    private suspectService: SuspectService,
  ) { }

  ngOnInit() {

      this.route.paramMap.subscribe((params: ParamMap) => {
        console.log( params.get('id'));
        this.suspectId = +this.route.snapshot.paramMap.get('id');
        // const suspectIdAsInt = parseInt(this.suspectId, 10);

        this.suspectService
        .getSuspect(this.suspectId)
        .subscribe(
          suspect => (this.suspect = suspect),
       );
      });
   }


   deleteSuspect() {
    this.suspectService.deleteSuspect(this.suspect.id).subscribe(
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


updateSuspect(form: NgForm) {
  console.log(this.suspect);
  this.suspectService.updateSuspect(this.suspect).subscribe(
    () => {
      this.suspectComponent.ngOnInit();
      this.router.navigate(['/suspect'], {
      });
    },
  );

}

}
