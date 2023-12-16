import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
constructor(private dataService :DataService){

}

contact:any;

ngDoCheck(){
  this.contact=this.dataService.myContact
}
ngAfterContentCheck(){
  this.contact=this.dataService.myContact
}
}
