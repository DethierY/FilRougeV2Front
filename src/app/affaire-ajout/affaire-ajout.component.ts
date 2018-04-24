import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../affaire.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Affaire } from '../model';
import { AffairesComponent } from '../affaires/affaires.component';
// import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-affaire-ajout',
  templateUrl: './affaire-ajout.component.html',
  styleUrls: ['./affaire-ajout.component.css']
})
export class AffaireAjoutComponent implements OnInit {

    affaire = new Affaire();
    editing: boolean;

    
  constructor(
    private affaireComponent: AffairesComponent,
    private affaireService: AffaireService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {
    this.affaireService.createAffaire(this.affaire)
    .subscribe( () => {
      this.affaireComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }

}
