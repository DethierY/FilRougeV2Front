import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { TemoinService } from '../temoin.service';
import { Temoin } from '../model';
import { NgForm } from '@angular/forms';
import { TemoinsComponent } from '../temoins/temoins.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-temoin-detail',
  templateUrl: './temoin-detail.component.html',
  styleUrls: ['./temoin-detail.component.css']
})
export class TemoinDetailComponent implements OnInit {


  temoinId: number;
  temoin = new Temoin(); // objet

  colonnes = ['nom', 'lieu', 'date'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private temoinComponent: TemoinsComponent,
    private route: ActivatedRoute,
    private router: Router,
    private temoinService: TemoinService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id'));
      this.temoinId = +this.route.snapshot.paramMap.get('id');

      this.temoinService
      .getTemoin(this.temoinId)
      .subscribe(
        temoin => (this.temoin = temoin),
     );
    });
  }

  deleteTemoin() {
    this.temoinService.deleteTemoin(this.temoin.id).subscribe(
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


updateTemoin(form: NgForm) {
  console.log(this.temoin);
  this.temoinService.updateTemoin(this.temoin).subscribe(
    () => {
      this.temoinComponent.ngOnInit();
      this.router.navigate(['/temoin'], {
      });
    },
  );

}

}
