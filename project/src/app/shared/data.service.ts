import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
userName:any;
myCity:any;
myAge:any;
myContact:any;
showDialog:boolean=false;


data= new Subject<any>();

url :string= 'http://localhost:3000'
  constructor(private httpClient :HttpClient){}
  postApiCall(endpoint:any,formData:any){
    let url :string =this.url + '/' +endpoint;
    return this.httpClient.post(url,formData);
  }
}
