import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { VictimeService } from '../victime.service';
import { Victime } from '../model';
import { NgForm } from '@angular/forms';
import { VictimesComponent } from '../victimes/victimes.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-victime-detail',
  templateUrl: './victime-detail.component.html',
  styleUrls: ['./victime-detail.component.css']
})
export class VictimeDetailComponent implements OnInit {

  victimeId: number;
  victime = new Victime(); // objet

  colonnes = ['nom', 'lieu', 'date'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private victimeComponent: VictimesComponent,
    private route: ActivatedRoute,
    private router: Router,
    private victimeService: VictimeService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id'));
      this.victimeId = +this.route.snapshot.paramMap.get('id');

      this.victimeService
      .getVictime(this.victimeId)
      .subscribe(
        victime => (this.victime = victime),
     );
    });
  }

  deleteVictime() {
    this.victimeService.deleteVictime(this.victime.id).subscribe(
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


updateVictime(form: NgForm) {
  console.log(this.victime);
  this.victimeService.updateVictime(this.victime).subscribe(
    () => {
      this.victimeComponent.ngOnInit();
      this.router.navigate(['/victime'], {
      });
    },
  );

}

}
