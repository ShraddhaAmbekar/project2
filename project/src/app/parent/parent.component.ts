import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
city="Mumbai";
address : any="kolhapur";
name:any="shraddha"
state:any;
// inputbond =child to parent
dataFromChild(event:any){
this.state =event;
}
}
