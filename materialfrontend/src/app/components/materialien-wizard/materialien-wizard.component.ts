import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Materialien } from 'src/app/models/materialien.model';
import { MaterialienService } from 'src/app/services/materialien.service';
import { MaterialienListComponent } from 'src/app/components/materialien-list/materialien-list.component';

@Component({
  selector: 'app-materialien-wizard',
  templateUrl: './materialien-wizard.component.html',
  styleUrls: ['./materialien-wizard.component.css']
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
  mat!: Materialien[];



  constructor(private formBuilder: FormBuilder, private MaterialienService: MaterialienService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      biokompatibel: [false],
      elastisch: [false],


    });
    this.newdata = "";
    
   
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    this.dataCheckboxes = JSON.stringify(this.form.value, null);
    this.newdata = this.dataCheckboxes.replace(",", "&");
    this.newdata = this.newdata.replace("{", "?");
    this.newdata = this.newdata.replace("}", "");
    this.newdata = this.newdata.replaceAll("\"", ""); //ersetzt nicht alle ""


    
    //eigentlich find mit this.newdata
    this.MaterialienService.getAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          this.Ausgabe = res;
        },
        error: (e) => console.error(e)
      });
    
   

  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

}