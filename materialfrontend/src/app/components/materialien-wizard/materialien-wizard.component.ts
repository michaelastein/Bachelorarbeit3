import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Materialien } from 'src/app/models/materialien.model';
import { MaterialienService } from 'src/app/services/materialien.service';
import { MaterialienListComponent } from 'src/app/components/materialien-list/materialien-list.component';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-materialien-wizard',
  templateUrl: './materialien-wizard.component.html',
  styleUrls: ['./materialien-wizard.component.css'],
  

})
export class MaterialienWizardComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  postId: any;
  obj: any;
  dataCheckboxes: any;
  getter: any;
  newdata!: string;
  Ausgabe: any;
  ausgabereturn: any;
  materialien?: Materialien[];


  dropdownListVerfahren: any = [];
  selectedItemsVerfahren: any = [];
  dropdownSettingsVerfahren: IDropdownSettings = {};

  dropdownListBereiche: any = [];
  selectedItemsBereiche: any = [];
  dropdownSettingsBereiche: IDropdownSettings = {};




  constructor(private formBuilder: FormBuilder, private MaterialienService: MaterialienService) { }

  ngOnInit() {
    
    this.dropdownListVerfahren = [
      { item_id: 1, verfahren: 'FFF/FDM' },
      { item_id: 2, verfahren: 'SLS' },
      { item_id: 3, verfahren: 'SLA' },
      { item_id: 4, verfahren: 'SLM' },
      { item_id: 5, verfahren: 'Polyjet' },
      { item_id: 6, verfahren: 'DMLS' },
      { item_id: 8, verfahren: 'DLS' },
      { item_id: 9, verfahren: 'DLP' }
    ];
    this.dropdownSettingsVerfahren = {
      idField: 'item_id',
      textField: 'verfahren',
    };
    this.selectedItemsVerfahren = [
      
    ];


    this.dropdownListBereiche = [
      { item_id: 1, bereiche: 'Automobilbau' },
      { item_id: 2, bereiche: 'Luft/Raumfahrt' },
      { item_id: 3, bereiche: 'Medizin' },
      { item_id: 4, bereiche: 'Prototypen' },
      { item_id: 5, bereiche: 'Maschinenbau' },
      { item_id: 6, bereiche: 'Elektroindustrie' },
      { item_id: 8, bereiche: 'Sport' },
      { item_id: 9, bereiche: 'Werkzeug' },
      { item_id: 10, bereiche: 'Modelle' },
      { item_id: 11, bereiche: 'Endprodukte' },
      { item_id: 12, bereiche: 'Kleinserien' },
      { item_id: 13, bereiche: 'Halterungen' },
      { item_id: 14, bereiche: 'Gehäuse' },
      { item_id: 15, bereiche: 'Tiefziehwerkzeuge' },
      { item_id: 16, bereiche: 'Fertigung' },
      { item_id: 17, bereiche: 'Spritzguss' },
      { item_id: 18, bereiche: 'Zahnmedizin' },
      { item_id: 19, bereiche: 'Schmuck' },
      { item_id: 20, bereiche: 'Fahrrad' },
      { item_id: 21, bereiche: 'Robotik' }
      
    ];
    this.dropdownSettingsBereiche = {
      idField: 'item_id',
      textField: 'bereiche',
    };
    this.selectedItemsBereiche = [
     
    ];



    this.form = this.formBuilder.group({

      temp_warm: [0],
      haerte: [30],
      wandstaerke: [2],
      dichte:[10],

      biokompatibel: [false],
      elastisch: [false],
      
      temperaturbestaendig: [false],
      festigkeit: [false],
      bruchfest: [false],
      lebensmittelecht: [false],
      transparent: [false],
      uvbestaendig: [false],
      witterungsbestaendig: [false],
      langlebig: [false],
      umweltvertraeglich: [false],
      chemisch_bestaendig: [false],
      oele_bestaendig: [false],
      feuchtigkeits_bestaendig: [false],
      abrieb_bestaendig: [false],
      sterilisierbar: [false],
      entflammbar: [false],
      temp_kalt: [false],

      verfahrenSelect: [this.selectedItemsVerfahren],
      bereicheSelect: [this.selectedItemsBereiche],


    });
    this.newdata = "";
    this.MaterialienService.getAll()
      .subscribe(
        data => {
          this.materialien = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });



   
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;    
    
   

    this.dataCheckboxes = JSON.stringify(this.form.value, null);
    this.newdata = this.dataCheckboxes.replaceAll(",", "&");
    this.newdata = this.newdata.replace("{", "?");
    this.newdata = this.newdata.replaceAll("}", "");
    this.newdata = this.newdata.replaceAll("\"", "");
    this.newdata = this.newdata.replaceAll(":", "=");
    this.newdata = this.newdata.replaceAll("{", "");
    this.newdata = this.newdata.replaceAll("verfahrenSelect=[", "");
    this.newdata = this.newdata.replaceAll("bereicheSelect=[", "");

    this.newdata = this.newdata.replaceAll("]", "");


    for (var i = 1; i <= 21; i++){
      var str = "&item_id="+ i + "&" ;
      this.newdata = this.newdata.replaceAll(str, "&");
    }
    
    this.newdata = this.newdata.replaceAll("&&", "&");


   


    this.newdata = this.newdata.replace("verfahren=FFF/FDM", "verfahren=FFF&verfahren=FDM");


    var split = this.newdata.split("&")
    for (let i = 0; i < split.length; i++) {
      if (split[i].includes("false")) {
        split[i] = ""
      }
      else {
        split[i] = "&" + split[i]
      }
      
    }
    this.newdata = split.join("")
    this.newdata = this.newdata.replace("&", "");



    
    //eigentlich find mit this.newdata
    this.MaterialienService.find(this.newdata)
      .subscribe(
        data => {


          this.materialien = data;
          console.log(data);
          this.submitted = true;
          
         // this.Ausgabe = JSON.stringify(data);
        },
        error => {
          console.log(error);
        });
    
   

  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    //  <button class="btn btn-secondary" type="reset" (click)="onReset()">Reset</button>
  }



 

}
