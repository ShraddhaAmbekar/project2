import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'costomSearch'
})
export class CostomSearchPipe implements PipeTransform {

  transform(data: any, searchText:any): any {   //changes
    console.log("search pipe calling");
    //return null;

    let text = searchText?.toLowerCase();
    console.log(text);
    return data.filter((ele:any)=>{
    return JSON.stringify(ele).toLowerCase().includes(text)
    })
  }
}
