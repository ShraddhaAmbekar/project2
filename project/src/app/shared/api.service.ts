import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://localhost:3000"
  constructor( private httpClient: HttpClient){};

  postApiCall(endpoint:any,formdata:any){
   let url:any=this.url+ '/' +endpoint
   return this.httpClient.post(url,formdata)
  }

}
