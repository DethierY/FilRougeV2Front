import { Component, OnInit } from '@angular/core';
import { TemoinService } from '../temoin.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Temoin } from '../model';
import { TemoinsComponent } from '../temoins/temoins.component';
// import { Affaire } from '../affaire';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-temoin-ajout',
  templateUrl: './temoin-ajout.component.html',
  styleUrls: ['./temoin-ajout.component.css']
})
export class TemoinAjoutComponent implements OnInit {

    // affaire: Affaire;
    temoin = new Temoin();
    editing: boolean;

  constructor(
    private temoinComponent: TemoinsComponent,
    private temoinService: TemoinService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {

    this.temoinService.createTemoin(this.temoin)
    .subscribe( () => {
      this.temoinComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }
}
