import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
name : string ="shraddha";
city : string ="Kolhapur";
age :number= 49;
contact:number=9876564879


constructor(public dataService : DataService, ){}

ngOnInit(){
this.dataService.userName = this.name;
this.dataService.myCity = this.city;
this.dataService.myAge = this.age;
this.dataService.myContact =this.contact
console.log("ng oninit home");
}






}
