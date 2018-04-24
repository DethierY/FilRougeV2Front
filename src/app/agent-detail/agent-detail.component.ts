import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { AgentService } from '../agent.service';
import { Agent } from '../model';
import { NgForm } from '@angular/forms';
import { AgentsComponent } from '../agents/agents.component';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {

  agentId: number;
  agent = new Agent(); // objet

  constructor(
    private agentComponent: AgentsComponent,
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id'));
      this.agentId = +this.route.snapshot.paramMap.get('id');

      this.agentService
      .getAgent(this.agentId)
      .subscribe(
        agent => (this.agent = agent),
     );
    });
  }


  deleteAgent() {
    this.agentService.deleteAgent(this.agent.id).subscribe(
      () => {
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
      },
      err => {
        console.log(err);
      }
    );
  }


updateAgent(form: NgForm) {
  console.log(this.agent);
  this.agentService.updateAgent(this.agent).subscribe(
    () => {
      this.agentComponent.ngOnInit();
      this.router.navigate(['/agent'], {
      });
    },
  );

}

}
