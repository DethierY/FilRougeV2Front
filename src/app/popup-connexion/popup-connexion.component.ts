import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-popup-connexion',
  templateUrl: './popup-connexion.component.html',
  styleUrls: ['./popup-connexion.component.css']
})
export class PopupConnexionComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PopupConnexionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
  }

}
