import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { DataTransmissionComponent } from './data-transmission/data-transmission.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : "about-us", component : AboutUsComponent},
  {path : "contact-us", component : ContactUsComponent},
  {path : "projects", component : ProjectsComponent},
  {path : "data-transmission", component : DataTransmissionComponent},
  {path : "parent", component : ParentComponent},
  {path : "child", component : ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
