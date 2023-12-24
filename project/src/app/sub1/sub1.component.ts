import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {
  constructor(private dataService: DataService){}
  data1:any;
  ngOnInit(){
    //this.dataService.data.subscribe(result=>{this.data1=result;})
    this.dataService.data.subscribe(data=>{this.data1=data;})
    console.log("this.data",this.data1)
  }

  
}
