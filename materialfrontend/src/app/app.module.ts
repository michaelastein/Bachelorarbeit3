import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialienWizardComponent } from './components/materialien-wizard/materialien-wizard.component';
import { MaterialienListComponent } from './components/materialien-list/materialien-list.component';
import { UebersichtComponent } from './components/uebersicht/uebersicht.component';
//import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { NgxPaginationModule } from 'ngx-pagination';
import { KontaktComponent } from './components/kontakt/kontakt.component';

@NgModule({
  declarations: [
    //hier neue Komponenten einfügen!

    AppComponent,

    MaterialienWizardComponent,
    MaterialienListComponent,
    UebersichtComponent,
    KontaktComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
