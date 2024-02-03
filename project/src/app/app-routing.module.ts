import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { DataTransmissionComponent } from './data-transmission/data-transmission.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TableComponent } from './table/table.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Loginform2Component } from './loginform2/loginform2.component';
import { PopupComponent } from './popup/popup.component';
import { CardkComponent } from './cardk/cardk.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : "about-us", component : AboutUsComponent},
  {path : "contact-us", component : ContactUsComponent},
  {path : "projects", component : ProjectsComponent},
  {path : "data-transmission", component : DataTransmissionComponent},
  {path : "parent", component : ParentComponent},
  {path : "child", component : ChildComponent},
  {path:"subject", component : SubComponent},
  {path:"subject1", component : Sub1Component},
  {path:"subject2", component : Sub2Component},
  {path:"directives", component : DirectivesComponent},
  {path:"pipes",component : PipesComponent},
  {path:"table",component : TableComponent},
  {path:"loginform",component : LoginformComponent},
  {path:"reactiveForm", component:ReactiveformComponent},
  {path:"loginform2",component : Loginform2Component},
  {path:"popup",component:PopupComponent},
  {path:"card",component:CardkComponent},
  {path:"hotelcard",component:HotelBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
