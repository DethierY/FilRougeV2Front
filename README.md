# FilRougeV2Front

        
## Développer une interface utilisateur


### Réaliser une interface graphique
Pour réaliser l'interface graphique nous avons utilisé  
L'IDE [Visual Studio Code](https://code.visualstudio.com/)  
Le framework Angular 5  
Les langages HTML5 CSS3 et TypeScript (sur-couche de JavaScript)  
        
### Appliquer une charte graphique
Codes couleur principaux utilisés :

	rgb(252, 204, 0)  
	rgb(46, 156, 211)  
	

        
### Analyser une maquette graphique et identifier les différentes parties d'un écran (zoning)
Afin de réaliser la mise en place des différents écrans, nous avons utilisé les mockups réalisés à l'aide de Balsamiq
        
        
### Faire un menu
Le menu a été réalisé grâce aux composants [Angular Material](https://material.angular.io/)
        
        
### Enchainer les écrans
Nous enchaînons les écrans grâce aux chemins d'accès défini dans le routing-module d'Angular  
Extrait du fichier :  

	const routes: Routes = [
	{path: '', redirectTo: '/accueil', pathMatch: 'full' },  
	{path: 'accueil', component: AccueilComponent, data: { title: 'Component acceuil' }},  
	{path: 'vehicules', component: VehiculesComponent, data: { title: 'Component vehicule' }, children: [  
	{path: 'create', component: VAjoutComponent, data: { title: 'Component ajoutVehicule' }},  
	{path: 'detail/:id', component: VDetailsComponent, data: { title: 'Component detailVehicule' }},  
	]},
 

        
### Connaitre des composants graphiques qui permettent de créer un écran

        
        
### Faire un formulaire de saisie
Exemple :  

	<form #formCreate (ngSubmit)="onSubmit(formCreate)" class="">  
                   
                     
                    <mat-form-field>  
                      <input matInput type="text" name="dossier" placeholder="dossier"   
                      [(ngModel)]="affaire.dossier">   
                    </mat-form-field>  
                
              
                    <mat-form-field class="">  
                      <input matInput type="text" name="lieu" placeholder="lieu" [(ngModel)]="affaire.lieu">   
                    </mat-form-field>  
         
                    <mat-form-field class="">  
                      <input matInput type ="text"  name="dateOuverture" placeholder="date: aaaa/mm/jj"  
                      [(ngModel)]="affaire.dateOuverture">  
                      </mat-form-field>  

      
       <div class="ligne3">  
            <button     
            [ngStyle.sm]="{'width.%': 40, 'height.em': 4, 'border-radius.%': 0}"   
            [ngStyle.xs]="{'width.%': 40, 'height.em': 4, 'border-radius.%': 0}"   
            type="submit">Annuler</button>  

            <button    
            [ngStyle.sm]="{'width.%': 40, 'height.em': 4, 'border-radius.%': 0}"   
            [ngStyle.xs]="{'width.%': 40, 'height.em': 4, 'border-radius.%': 0}"  
            type="submit">Soumettre</button>  
        </div>  
      </form>  
        
        
### Mettre en place des procédures de contrôle de saisie
Pour l'immatriculation des voitures, une regex a été créée côté back-end. Côté Front-end, un attribut required a été ajouté dans l'input correspondant
        
### Faire un test unitaire manuel  
Exemple d'un test crée pour tester la méthose getVehiculeDetail grâce à la librairie Mockito :  

	package filrouge.gedesaft;  
	import org.junit.Test;  
	import org.junit.runner.RunWith;  
	import org.mockito.Mockito;  
	import org.skyscreamer.jsonassert.JSONAssert;  
	import org.springframework.beans.factory.annotation.Autowired;  
	import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;  
	import org.springframework.boot.test.mock.mockito.MockBean;  
	import org.springframework.http.MediaType;  
	import org.springframework.test.context.junit4.SpringRunner;  
	import org.springframework.test.web.servlet.MockMvc;  
	import org.springframework.test.web.servlet.MvcResult;  
	import org.springframework.test.web.servlet.RequestBuilder;  
	import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;  
  	  
	import filrouge.gedesaft.controller.VehiculeController;	  
	import filrouge.gedesaft.dao.JdbcVehiculeDAO;  
	import filrouge.gedesaft.model.Vehicule;  
	import filrouge.gedesaft.service.VehiculeService;  
  
	@RunWith(SpringRunner.class)  
	@WebMvcTest(value=VehiculeController.class, secure=false)  
	public class VehiculeControllerTest {  
  
	@Autowired  
	private MockMvc mockMvc;  
	  
	@MockBean  
	private VehiculeService vehiculeService;  
	  
	@MockBean  
	private JdbcVehiculeDAO dataDaoImpl;  
	  
	@Test  
    public void getVehiculeDetail() throws Exception {  
			  
		Vehicule vehicule = new Vehicule();  
		vehicule.setId((long) 1);  
		vehicule.setType("camion");  
	  
		Mockito.when(vehiculeService.getVehiculeDetail((long) 1)).thenReturn(vehicule);  
			  
		RequestBuilder requestBuilder =   MockMvcRequestBuilders.get("http://localhost:8080/vehicule/1")  
		.accept(MediaType.APPLICATION_JSON);  
			  
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();  
		         
        System.out.println(result.getResponse());  
        String expected = "{id_vehicule:1, type:camion}";  
	          
        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);  
	}  
	}    
        
### Coder avec un langae orienté objet  
TypeScript étant un langage orienté objet, nous avons défini toutes nos classes dans le fichier model.ts :  
	
		export class Affaire {  
  
	    public id?: number; // id auto généré  
	    dateOuverture: Date;  
	    dossier: string;  
	    lieu: string;  
	    vehiculesImpliques?: VehiculeImplique[];  
	    armesImpliquees?: ArmeImpliquee[];  
	    suspectsImpliques?: SuspectImplique[];  
	    temoinsImpliques?: TemoinImplique[];  
	    agentsImpliques?: AgentImplique[];  
	}  
  
	export class Personne {  
  
	    public id?: number;  
	    nom: string;  
	    prenom: string;  
	    dateNaissance: Date;  
	}  
  
	export class Suspect extends Personne {  
  
	    public id?: number;  
	    signeParticulier: string;  
	    couleurPeau: string;  
	    couleurCheveux: string;  
	    taille: string;  
	}  
  
	export class SuspectImplique {  
  
	    public id?: number;  
	    suspect: Suspect;  
	    dateImplication: Date;  
	}  
  
	export class Temoin extends Personne {  
  
	    public id?: number;  
	}  
  
	export class TemoinImplique {  
  
	    public id?: number;  
	    temoin: Temoin;  
	    dateImplication: Date;  
	    deposition: string;  
	}  
  
	export class Agent extends Personne {  
  
	    public id?: number;  
	    grade: string;  
	}  
  
	export class AgentImplique {  
  
	    public id?: number;  
	    agent: Agent;  
	    dateImplication: Date;  
	}  
  
	export class Victime extends Personne {  
  
	    public id?: number;  
	    vivant: boolean;  
	}  
  
	export class VictimeImplique {  
  
	    public id?: number;  
	    victime: Victime;  
	    dateAgression: Date;  
	    typeAgression: string;  
	}  
  
	export class Vehicule {  
  
	    public id?: number;  
	    type: string;  
	    modele: string;  
	    couleur: string;  
	    marque: string;  
	    immatriculation: string;  
	}  
  
	export class VehiculeImplique {  
  
	    public id?: number;  
	    vehicule: Vehicule;  
	    dateImplication: Date;  
	}  
  
	export class Arme {  
  
	    public id?: number;  
	    type: string;  
	    modele: string;  
	    calibre: string;  
	    numeroSerie: string;  
	}  
  
	export class ArmeImpliquee {  
  
	    public id?: number;  
	    arme: Arme;  
	    dateImplication: Date;  
	}  
  
        
### Connaître la programmation événementielle 
Exemple de programmation évènementielle utilisée dans notre projet :  
Appel à la fonction afficherId dans le code HTML,  

	<button (click)="afficherId(element.id)" mat-button color="primary" >Détail</button>  

Cette fonction se trouve dans le fichier .ts associé.  

	afficherId(id) {  
	this.router.navigate(['detail', id], {relativeTo: this.route});  
	}  
	    
### Utiliser un Environnement de Développement intégré (IDE)  
Pour rappel, nous avons utilisé VSC pour le front-end, Eclipse Oxygen pour le back-end. 
        
### Versionner mon travail  
Pour versionner notre travail nous avons utilisé GitBash et GitHub.
        
### Mettre des commentaires dans mes programmes 
### Coder selon les règles de l'art 
Se référer au code dans les différents fichiers


# GEDESAFT

Afin de pourvoir installer et lancer l'application, il faut savoir utiliser les lignes de commandes
https://windows.developpez.com/cours/ligne-commande/

## CONFIGURATION REQUISE

- JRE installer sur l'ordinateur (v 1.8), attention la v 1.9 est déconseillée
https://www.java.com/fr/download/help/download_options.xml
- MySql-server (v 5.7 +)
https://dev.mysql.com/downloads/mysql/#downloads
https://openclassrooms.com/courses/administrez-vos-bases-de-donnees-avec-mysql/installation-de-mysql (tuto installation)
- git (v2.14 +) 
https://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git
- Node.js 
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/installer-node-js (tuto installation)
https://nodejs.org/en/download/ (téléchargement)
- Angular CLI (v1.6.5 +)
lancer la ligne de commande "npm install @angular/cli" (nécéssite node.js)

## IMPORT DU PROJET

Installer les prérequis si nécéssaire
Télécharger le dossier .zip du projet 
ou l'importer (voir ci dessous)
 - Lancer le gitBash à l'emplacement ou vous voulez importez le projet (click Droit "Git Bash Here")
 - Lancer la commande "git clone https://github.com/DethierY/GEDESAFT.git"


## LANCEMENT DE L'APPLICATION

L'application étant séparée en deux parties, il faut les démarrer toutes les deux pour que l'application fonctionne
Vous avez déjà du suivre le tutoriel pour démarrer le projet côté Back depuis le repo GEDESAFT
	  
### Lancer l'application Angular
Ce projet a été généré avec Angular CLI 1.6.5
Cloner ou télécharger le dossier front-end https://github.com/milk42/FilRougeV2Front.git

Dans le dossier du front, lancer une ligne de commande
 - npm install
 - ng serve
 
- Dans un navigateur internet, inscrire l'adresse http://localhost:4200/

# REMERCIEMENTS
Nous tenons à remercier les collègues pour leur aide, les professeurs pour leur soutien et Simplon pour leur patience!
