import { Component, OnInit } from '@angular/core';
import { SuspectService } from '../suspect.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Suspect } from '../model';
import { SuspectsComponent } from '../suspects/suspects.component';
// import { Affaire } from '../affaire';
// import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-suspect-ajout',
  templateUrl: './suspect-ajout.component.html',
  styleUrls: ['./suspect-ajout.component.css']
})
export class SuspectAjoutComponent implements OnInit {

  couleurCheveux = [
    {value: 'blond-0', viewValue: 'Blond'},
    {value: 'brun-1', viewValue: 'Brun'},
    {value: 'chauve-2', viewValue: 'Chauve'}
  ];

  couleurPeau = [
    {value: 'blanc-0', viewValue: 'Blanc'},
    {value: 'marron-1', viewValue: 'Marron'},
    {value: 'noir-2', viewValue: 'Noir'}
  ];
  photos = [
    {value: './../assets/image/site/lion.PNG', viewValue: 'Lion'},
    {value: './../assets/image/site/hiboux.PNG', viewValue: 'Hiboux'},
    {value: './../assets/image/site/chat.PNG', viewValue: 'Chat'},
    {value: './../assets/image/site/suricat.PNG', viewValue: 'Suricat'}
  ];
  // affaire: Affaire;
  suspect = new Suspect();
  editing: boolean;


  constructor(
    private suspectComponent: SuspectsComponent,
    private suspectService: SuspectService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {
    // console.log('c\'est ici que ça va pas' + this.suspect.pseudo);
    this.suspectService.createSuspect(this.suspect)
    .subscribe( () => {
      this.suspectComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }
}
