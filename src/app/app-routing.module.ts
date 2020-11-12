import { GlobalComponent } from './global/global.component';
import { CountriesComponent } from './countries/countries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: GlobalComponent},
  {path: 'por-paises', component: CountriesComponent},
  {path: '**', component: GlobalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
