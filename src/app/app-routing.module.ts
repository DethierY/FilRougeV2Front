import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout/';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PopupConnexionComponent } from './popup-connexion/popup-connexion.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { VDetailsComponent } from './v-details/v-details.component';
import { VAjoutComponent } from './v-ajout/v-ajout.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { SuspectDetailsComponent } from './suspect-details/suspect-details.component';
import { SuspectAjoutComponent } from './suspect-ajout/suspect-ajout.component';
import { ArmesComponent } from './armes/armes.component';
import { ArmeDetailComponent } from './arme-detail/arme-detail.component';
import { ArmeAjoutComponent } from './arme-ajout/arme-ajout.component';
import { TemoinsComponent } from './temoins/temoins.component';
import { TemoinAjoutComponent } from './temoin-ajout/temoin-ajout.component';
import { TemoinDetailComponent } from './temoin-detail/temoin-detail.component';
import { VictimesComponent } from './victimes/victimes.component';
import { VictimeAjoutComponent } from './victime-ajout/victime-ajout.component';
import { VictimeDetailComponent } from './victime-detail/victime-detail.component';
import { AffairesComponent } from './affaires/affaires.component';
import { AffaireDetailComponent } from './affaire-detail/affaire-detail.component';
import { AffaireAjoutComponent } from './affaire-ajout/affaire-ajout.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentAjoutComponent } from './agent-ajout/agent-ajout.component';




const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component: AccueilComponent, data: { title: 'Component accueil' }},
  {path: 'vehicules', component: VehiculesComponent, data: { title: 'Component vehicule' }, children: [
    {path: 'create', component: VAjoutComponent, data: { title: 'Component ajoutVehicule' }},
    {path: 'detail/:id', component: VDetailsComponent, data: { title: 'Component detailVehicule' }},
  ]},
   {path: 'suspect', component: SuspectsComponent, data: { title: 'Component suspects' }, children: [
     {path: 'create', component: SuspectAjoutComponent, data: { title: 'Component createSuspect' }},
     {path: 'detail/:id', component: SuspectDetailsComponent, data: { title: 'Component detailSuspect' }},
   ]},
   {path: 'armes', component: ArmesComponent, data: { title: 'Component armes' }, children: [
    {path: 'create', component: ArmeAjoutComponent, data: { title: 'Component createArme' }},
    {path: 'detail/:id', component: ArmeDetailComponent, data: { title: 'Component detailArme' }},
  ]},
  {path: 'temoins', component: TemoinsComponent, data: { title: 'Component temoins' }, children: [
    {path: 'create', component: TemoinAjoutComponent, data: { title: 'Component createTemoin' }},
    {path: 'detail/:id', component: TemoinDetailComponent, data: { title: 'Component detailTemoin' }},
    // {path: ':id', component: TemoinDetailComponent, data: { title: 'Component detailTemoin' }},
  ]},
  {path: 'victimes', component: VictimesComponent, data: { title: 'Component victimes' }, children: [
    {path: 'create', component: VictimeAjoutComponent, data: { title: 'Component createVictime' }},
    {path: 'detail/:id', component: VictimeDetailComponent, data: { title: 'Component detailVictime' }},
  ]},
  {path: 'affaire', component: AffairesComponent, data: { title: 'Component affaires' }, children: [
    {path: 'create', component: AffaireAjoutComponent, data: { title: 'Component createAffaire' }},
    {path: 'detail/:id', component: AffaireDetailComponent, data: { title: 'Component detailAffaire' }},
  ]},
  {path: 'agents', component: AgentsComponent, data: { title: 'Component agents' }, children: [
    {path: 'create', component: AgentAjoutComponent, data: { title: 'Component createAgent' }},
    {path: 'detail/:id', component: AgentDetailComponent, data: { title: 'Component detailAgent' }},
  ]},
];





@NgModule({
  exports: [RouterModule],

  imports: [
    CommonModule,
    MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  FlexLayoutModule,
  NoopAnimationsModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(routes, {enableTracing: true})
  ],
  // declarations: []
})
export class AppRoutingModule { }
