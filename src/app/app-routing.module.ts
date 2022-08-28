import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgeComponent } from './components/age/age.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { EmiComponent } from './components/emi/emi.component';
import { ScientificComponent } from './components/scientific/scientific.component';
import { StandardComponent } from './components/standard/standard.component';

const routes: Routes = [
  {path:"",component:StandardComponent},
  {path:'mini',component:StandardComponent},
  {path:'sci',component:ScientificComponent},
  {path:'age',component:AgeComponent},
  {path:'currency',component:CurrencyComponent},
  {path:'converter',component:ConverterComponent},
  {path:'emi',component:EmiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
