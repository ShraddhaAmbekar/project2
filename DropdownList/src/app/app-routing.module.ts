import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateCityComponent } from './state-city/state-city.component';

const routes: Routes = [
 { path:'stateCity', component:StateCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
