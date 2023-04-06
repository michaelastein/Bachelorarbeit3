

export class Materialien {

  // die Definition aller Fields der Materialien-Tabelle mit entsprechenden Datentypen
  // entsprechend der Model-Definition im Backend, nur in TypeScript

  id?: any;
  name?: string;
  materialart?: string;

  handelsname?: string;
  verfahren?: string;
  firmeneigen?: boolean;
  fachbezeichnung?: string;
  waermeformbestaendigkeit?:number;
  glasuebergangstemp?: number;
  schmelzpunkt?: number;
  temp_warm?: number;
  temp_kalt?: number;
  temperaturbestaendig?: boolean;
  festigkeit?: boolean;
  haerte?: number;
  haerte_hv?: number;
  bruchfest?: boolean;
  dichte?: number;
  wandstaerke?: number;

  elastisch?: boolean;
  lebensmittelecht?: boolean;
  transparent?: boolean;
  uvbestaendig?: boolean;
  witterungsbestaendig?: boolean;
  korrosionsbestaendig?: boolean;
  langlebig?: boolean;
  umweltvertraeglich?: boolean;
  biokompatibel?: boolean;
  chemisch_bestaendig?: boolean;
  oele_bestaendig?: boolean;
  feuchtigkeits_bestaendig?: boolean;
  abrieb_bestaendig?: boolean;
  sterilisierbar?: boolean;
  entflammbar?: boolean; 
  bereiche?: string;               
                 
  verwendung?: string;

  vorteile?: string;
  nachteile?: string;




}
