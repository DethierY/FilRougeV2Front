import { Component, OnInit } from '@angular/core';
import { VictimeService } from '../victime.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Victime } from '../model';
import { VictimesComponent } from '../victimes/victimes.component';
// import { Affaire } from '../affaire';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-victime-ajout',
  templateUrl: './victime-ajout.component.html',
  styleUrls: ['./victime-ajout.component.css']
})
export class VictimeAjoutComponent implements OnInit {

    // affaire: Affaire;
    victime = new Victime();
    editing: boolean;

  constructor(
    private victimeComponent: VictimesComponent,
    private victimeService: VictimeService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {
    // console.log('c\'est ici que ça va pas' + this.suspect.pseudo);
    this.victimeService.createVictime(this.victime)
    .subscribe( () => {
      this.victimeComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }

}
