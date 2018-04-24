import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupConnexionComponent } from '../popup-connexion/popup-connexion.component';
import { AppService } from '../app.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

identifiant: string;
password: string;


  // Créer la/les variables pour manipuler les outils des modules servant à créer lun pop
  // ici on a, une variable dialog de type MatDialog.
  // On y ajoutera plus tard la variable liée au service
  constructor(public appService: AppService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ouvrirDialog();
  }


  ouvrirDialog(): void {
    const dialogRef = this.dialog.open(PopupConnexionComponent, {
      width: '400px',
      height: '500px',
      data: { identifiant: this.identifiant, password: this.password }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('La boite de dialog se ferme');
      console.log(this.password + this.identifiant);
      // Changer la récupération des données en binding simple et mettre les identifiant
      // et mot de passe en dure dans cette méthode.
    });
  }


}
