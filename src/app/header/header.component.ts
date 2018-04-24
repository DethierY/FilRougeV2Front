import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

title = '';
listePersonne = ['Suspect', 'Témoin', 'Victime'];

  constructor(
    public appService: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    // console.log('le composant est initié');
    // this.router.events
    // .filter((event) => event instanceof NavigationEnd)
    // .map(() => this.activatedRoute)
    // .map((route) => {
    //   return route;
    // })
    // .filter((route) => route.outlet === 'primary')
    // .mergeMap((route) => route.data)
    // .subscribe((event) => this.titleService.setTitle(event['title']));
    this.titleService.setTitle('My awesome app');
}


  selectMenu (menu) {
    this.appService.selectedMenu = menu;
    console.log(this.appService.selectedMenu);
  }

  // changeTitle(title) {
  //   this.title = title;
  //  }


}
