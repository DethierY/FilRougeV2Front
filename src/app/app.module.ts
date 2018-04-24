import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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



@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  declarations: [],

})
export class DemoMaterialModule {}
///////////////////////////////////////////////////////////////////////////////////////////////


 import { AppComponent } from './app.component';
 import { AccueilComponent } from './accueil/accueil.component';
 import { PopupConnexionComponent } from './popup-connexion/popup-connexion.component';
 import { VehiculesComponent } from './vehicules/vehicules.component';
 import { HeaderComponent } from './header/header.component';
 import { FooterComponent } from './footer/footer.component';
 import { BodyComponent } from './body/body.component';
 import { VDetailsComponent } from './v-details/v-details.component';



import { AppService } from './app.service';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { VAjoutComponent } from './v-ajout/v-ajout.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { SuspectAjoutComponent } from './suspect-ajout/suspect-ajout.component';
import { SuspectDetailsComponent } from './suspect-details/suspect-details.component';
import { SuspectService } from './suspect.service';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VehiculeService } from './vehicule.service';
import { ArmesComponent } from './armes/armes.component';
import { ArmeService } from './arme.service';
import { ArmeDetailComponent } from './arme-detail/arme-detail.component';
import { ArmeAjoutComponent } from './arme-ajout/arme-ajout.component';
import { TemoinsComponent } from './temoins/temoins.component';
import { TemoinService } from './temoin.service';
import { TemoinAjoutComponent } from './temoin-ajout/temoin-ajout.component';
import { TemoinDetailComponent } from './temoin-detail/temoin-detail.component';
import { VictimesComponent } from './victimes/victimes.component';
import { VictimeService } from './victime.service';
import { VictimeAjoutComponent } from './victime-ajout/victime-ajout.component';
import { VictimeDetailComponent } from './victime-detail/victime-detail.component';
import { AffairesComponent } from './affaires/affaires.component';
import { AffaireService } from './affaire.service';
import { AffaireDetailComponent } from './affaire-detail/affaire-detail.component';
import { AffaireAjoutComponent } from './affaire-ajout/affaire-ajout.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentService } from './agent.service';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentAjoutComponent } from './agent-ajout/agent-ajout.component';







@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PopupConnexionComponent,
    VehiculesComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    VDetailsComponent,
    VAjoutComponent,
    SuspectsComponent,
    SuspectAjoutComponent,
    SuspectDetailsComponent,
    ArmesComponent,
    ArmeDetailComponent,
    ArmeAjoutComponent,
    TemoinsComponent,
    TemoinAjoutComponent,
    TemoinDetailComponent,
    VictimesComponent,
    VictimeAjoutComponent,
    VictimeDetailComponent,
    AffairesComponent,
    AffaireDetailComponent,
    AffaireAjoutComponent,
    AgentsComponent,
    AgentDetailComponent,
    AgentAjoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    DemoMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // RouterModul
    // MatDialog,
    // MatDialogRef
    // FormsModule,
    // ReactiveFormsModule,
    // FormControl,
    // FormGroupDirective,
    // NgForm,
    // Validators

  ],
  providers: [AppService, SuspectService, VehiculeService,
    ArmeService, TemoinService, VictimeService, AffaireService,
    AgentService],
  bootstrap: [AppComponent],

entryComponents: [
  PopupConnexionComponent
]
})
export class AppModule { }
