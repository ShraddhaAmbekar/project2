import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  constructor(private dataService :DataService){};

submit(form:any){
  console.log("form obj", form);
  let endpoint:string ='user';
    console.log(form.value)
}

}
