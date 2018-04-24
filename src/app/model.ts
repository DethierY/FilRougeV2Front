export class Affaire {

    public id?: number; // id auto généré
    dateOuverture: Date;
    nom: string;
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

