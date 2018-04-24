import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { SuspectService } from '../suspect.service';
import { Suspect } from '../model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {

  suspects = new Array<Suspect>();
  suspect: Suspect;

  colonnes = ['nom', 'prenom', 'taille'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  suspectList: [
    {
      id: '1',
      nom: 'gigi',
      prenom: 'yoyo',
      taille: '170'
    },
    {
      id: '1',
      nom: 'gigig',
      prenom: 'yoyo',
      taille: '170'
    },
    {
      id: '1',
      nom: 'gigid',
      prenom: 'yoyo',
      taille: '170'
    },
    {
      id: '1',
      nom: 'gigix',
      prenom: 'yoyo',
      taille: '170'
    }
  ];
  constructor(public appService: AppService, private route: ActivatedRoute,
    private router: Router, public suspectService: SuspectService) { }

  ngOnInit() {
    // this.suspectService.getSuspects().subscribe( (data: Suspect[]) => {
    //   this.suspects = data;
    // });


    this.appService.listerObjet().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      }
    );

  }

afficherId(suspect) {
  this.router.navigate(['/detail/:id', suspect.id], {relativeTo: this.route});
}

}
