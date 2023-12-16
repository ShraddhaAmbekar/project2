import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-transmission',
  templateUrl: './data-transmission.component.html',
  styleUrls: ['./data-transmission.component.css']
})
export class DataTransmissionComponent {
  constructor(private dataService : DataService){
    console.log("constructor of datatransmission");
    
  }
  name:any;
  city:any;
  age:any=30;
  contact:any;


ngOnInit(){
  console.log("ng-oninit data-transmission");
  
this.name = this.dataService.userName;
this.city = this.dataService.myCity;
this.age = this.dataService.myAge;
this.contact = this.dataService.myContact;
}


}
