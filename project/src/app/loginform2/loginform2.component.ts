import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-loginform2',
  templateUrl: './loginform2.component.html',
  styleUrls: ['./loginform2.component.css']
})
export class Loginform2Component {
  
 

  OnSubmit(form:NgForm){
    console.log("login successfully");
    console.log(form)
  }
 
}
