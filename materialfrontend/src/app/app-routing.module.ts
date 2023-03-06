import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialienWizardComponent } from './components/materialien-wizard/materialien-wizard.component';
import { MaterialienListComponent } from './components/materialien-list/materialien-list.component';
import { UebersichtComponent } from './components/uebersicht/uebersicht.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';


const routes: Routes = [
  { path: '', redirectTo: 'materialien', pathMatch: 'full' },

  { path: 'materialien', component: MaterialienWizardComponent },
  { path: 'uebersicht', component: UebersichtComponent },
  { path: 'kontakt', component: KontaktComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
