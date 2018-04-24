import { Component, OnInit } from '@angular/core';
import { ArmeService } from '../arme.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Arme } from '../model';
import { ArmesComponent } from '../armes/armes.component';
// import { Affaire } from '../affaire';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-arme-ajout',
  templateUrl: './arme-ajout.component.html',
  styleUrls: ['./arme-ajout.component.css']
})
export class ArmeAjoutComponent implements OnInit {


    // affaire: Affaire;
    arme = new Arme();
    editing: boolean;

  constructor(
    private armeComponent: ArmesComponent,
    private armeService: ArmeService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {
    // console.log('c\'est ici que ça va pas' + this.suspect.pseudo);
    this.armeService.createArme(this.arme)
    .subscribe( () => {
      this.armeComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }
}
