import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { Form7Component } from './form7/form7.component';
import { Form8Component } from './form8/form8.component';
import { Form9Component } from './form9/form9.component';
import { Form10Component } from './form10/form10.component';
import { Form12Component } from './form12/form12.component';
import { Form11Component } from './form11/form11.component';
import { Form13Component } from './form13/form13.component';
import { Form14Component } from './form14/form14.component';
import { Form15Component } from './form15/form15.component';
import { Form16Component } from './form16/form16.component';
import { StudentReactiveFormComponent } from './student-reactive-form/student-reactive-form.component';

const routes: Routes = [
  {path:'form1',component:Form1Component},
  {path:'form2',component:Form2Component},
  {path:'form3',component:Form3Component},
  {path:'form4',component:Form4Component},
  {path:'form5',component:Form5Component},
  {path:'form6',component:Form6Component},
  {path:'form7',component:Form7Component},
  {path:'form8',component:Form8Component},
  {path:'form9',component:Form9Component},
  {path:'form10',component:Form10Component},
  {path:'form11',component:Form11Component},
  {path:'form12',component:Form12Component},
  {path:'form13',component:Form13Component},
  {path:'form14',component:Form14Component},
  {path:'form15',component:Form15Component},
  {path:'form16',component:Form16Component},
  {path:'studentReactive',component:StudentReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
