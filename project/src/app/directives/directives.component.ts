import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  title:any= "Directives in component"
  city:string="Kolhapur"
  isShow=true
  cars:any=["i10",'i20',"swift","jaguar"]
  showDiv=true
  fruit:any="apple"
  user:string="Admin";
  show:boolean=false;
  showtbl:boolean=false



  toggle(){
    this.showDiv = !this.showDiv
    console.log("toggle")
  }
  showPractice(){
    this.show = !this.show
    console.log('show practice');
  }
  showTable(){
    this.showtbl = !this.showtbl
    console.log('show table');
    
  }

    tableHeadings=['Name','Age','Contact','City', 'Country']

    tableData:any= [
      {name:'shraddha',age:22, contact:783748329, city:'kolhapur', country:'India'},
      {name:'shreyash',age:20, contact:985675787, city:'kolhapur', country:'India'},
      {name:'anjelina',age:27, contact:54554529, city:'london', country:'england'},
      {name:'armana',age:50, contact:64968, city:'london', country:'england'}]


 
}




