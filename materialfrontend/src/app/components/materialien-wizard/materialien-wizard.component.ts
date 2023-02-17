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
  slider1: boolean = true;


  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};


  constructor(private formBuilder: FormBuilder, private MaterialienService: MaterialienService) { }

  ngOnInit() {
    
    this.dropdownList = [
      { item_id: 1, verfahren: 'FFF/FDM' },
      { item_id: 2, verfahren: 'SLS' },
      { item_id: 3, verfahren: 'SLA' },
      { item_id: 4, verfahren: 'SLM' },
      { item_id: 5, verfahren: 'Polyjet' },
      { item_id: 6, verfahren: 'DMLS' },
      { item_id: 8, verfahren: 'DLS' },
      { item_id: 9, verfahren: 'DLP' }


    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'verfahren',
    };
    this.selectedItems = [
      { item_id: 1, verfahren: 'FFF/FDM' },
      { item_id: 2, verfahren: 'SLS' },
      { item_id: 3, verfahren: 'SLA' },
      { item_id: 4, verfahren: 'SLM' },
      { item_id: 5, verfahren: 'Polyjet' },
      { item_id: 6, verfahren: 'DMLS' },
      { item_id: 8, verfahren: 'DLS' },
      { item_id: 9, verfahren: 'DLP' }
    ];


    this.form = this.formBuilder.group({

      waermeformbestaendigkeit: [0],
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

      myItems: [this.selectedItems],


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
    this.newdata = this.newdata.replaceAll("myItems=[", "");
    this.newdata = this.newdata.replaceAll("]", "");

    for (var i = 1; i <= 9; i++){
      var str = "&item_id="+ i ;
      this.newdata = this.newdata.replace(str, "");
    }
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

  }



  toggleBeliebig1() {
    this.slider1 = !this.slider1;
  }

}
