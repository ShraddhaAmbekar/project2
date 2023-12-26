import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  showtbl:boolean=false

  searchText:any=""
  
  tableHeadings=['Name','Age','Contact','City', 'Country']

  tableData:any= [
    {name:'shraddha',age:22, contact:783748329, city:'kolhapur', country:'India'},
    {name:'shreyash',age:20, contact:985675787, city:'kolhapur', country:'India'},
    {name:'anjelina',age:27, contact:54554529, city:'london', country:'england'},
    {name:'armana',age:50, contact:64968, city:'london', country:'england'},
    {name:'shraddha',age:22, contact:783748329, city:'kolhapur', country:'India'},
    {name:'shreyash',age:20, contact:985675787, city:'kolhapur', country:'India'},
    {name:'anjelina',age:27, contact:54554529, city:'london', country:'england'},
    {name:'armana',age:50, contact:64968, city:'london', country:'england'},
    {name:'shraddha',age:22, contact:783748329, city:'kolhapur', country:'India'},
    {name:'Pooja',age:20, contact:985675787, city:'sangali', country:'India'},
    {name:'anjelina',age:27, contact:54554529, city:'london', country:'england'},
    {name:'kruto',age:50, contact:64968, city:'london', country:'england'},]

  showTable(){
      this.showtbl = !this.showtbl
      console.log('show table')
  }
}
