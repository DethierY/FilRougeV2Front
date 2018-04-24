import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Agent } from '../model';
import { AgentsComponent } from '../agents/agents.component';
// import { Affaire } from '../affaire';
// import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-agent-ajout',
  templateUrl: './agent-ajout.component.html',
  styleUrls: ['./agent-ajout.component.css']
})
export class AgentAjoutComponent implements OnInit {


    // affaire: Affaire;
    agent = new Agent();
    editing: boolean;


  constructor(
    private agentComponent: AgentsComponent,
    private agentService: AgentService,
    private apiService: AppService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(spt: NgForm) {
    this.agentService.createAgent(this.agent)
    .subscribe( () => {
      this.agentComponent.ngOnInit();
      this.router.navigate(['../'], {
        relativeTo: this.route
      });
    } ); }
}
