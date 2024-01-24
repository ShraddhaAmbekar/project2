import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-state-city',
  templateUrl: './state-city.component.html',
  styleUrls: ['./state-city.component.scss']
})
export class StateCityComponent {
  dropdownForm!:FormGroup

  list=[
    {
      id:1,
      label:'Asia',
      countries:[
        {
          id:101,
          label:'India'
        },
        {
          id:102,
          label:'Iran'
        },  
      ]
    },
    {
      id:2,
      label:'Europe',
      countries:[
        {
          id:201,
          label:'France'
        },
        {
          id:202,
          label:'Germony'
        },  
      ]
    }
  ]
  ngOnInit(){
    this.functionCalling()

  }

selectedContriesList:any[]=[]
submit(){
  console.log(this.dropdownForm.value)
}



functionCalling(){
  this.dropdownForm =new FormGroup({
    continent:new FormControl(null),
    country:new FormControl({value:null, disabled:true})
  });

  this.dropdownForm.get('continent')?.valueChanges.subscribe((res:number)=>{
    console.log(res);
    this.dropdownForm.get('country')?.setValue(null);

    if(res){
    this.selectedContriesList = this.list.filter((obj:any)=>obj.id ===res)[0].countries;
    this.dropdownForm.get('country')?.enable()}
    else {
      this.dropdownForm.get('country')?.disable()
    }
  }
)
}
}
