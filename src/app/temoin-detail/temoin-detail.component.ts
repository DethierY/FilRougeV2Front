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
      // const temoinIdAsInt = parseInt(this.temoinId, 10);

      this.temoinService
      .getTemoin(this.temoinId)
      .subscribe(
        temoin => (this.temoin = temoin),
     );
    });
  }


updateTemoin(form: NgForm) {
  console.log(this.temoin);
  this.temoinService.updateTemoin(this.temoin).subscribe(
    () => {
      this.temoinComponent.ngOnInit();
      // this.router.navigate(['/temoin'],{
      // });
    },
  );

}

deleteTemoin(id) {
  this.temoinService.deleteTemoin(this.temoin).subscribe(
    () => {
      this.temoinComponent.ngOnInit();
      this.router.navigate(['/temoins'], {
      });
    },
    err => {
      console.log(err);
    }
  );
}


// deleteTemoin(id) {
//   this.temoinService.deleteTemoin(this.temoin).subscribe(
//     () => {
//       this.router.navigate(['../../'], { //     ./../  et .././  et ../../. et ../ et / et ./
//         relativeTo: this.route
//       });
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }


}
