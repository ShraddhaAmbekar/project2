import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
reactiveForm! : FormGroup

constructor(private formBuilder : FormBuilder, private dataService:DataService, private apiService:ApiService){};

ngOnInit(){
 this.formLoad();
};

formLoad(){
  this.reactiveForm = this.formBuilder.group({
    name : ['', [Validators.required]],
    mob : [],
    email : [''],
    pan : [''],
    pass : [''],
    confirmPass : [''],
    image:[]
  })
};

// submit(){
//   let endpoint='user'
//   console.log(this.reactiveForm.value);
//   this.dataService.postApiCall(endpoint,this.reactiveForm.value).subscribe(result=>(console.log(result)))

// }
// submit(){
//   let endpoint='admin';
//   this.dataService.postApiCall(endpoint,this.reactiveForm.value).subscribe(ref=>(console.log()))
// }
submit(){
  let endpoint='owner';
  this.apiService.postApiCall(endpoint,this.reactiveForm.value).subscribe(res=>(console.log(res)))
}
}
