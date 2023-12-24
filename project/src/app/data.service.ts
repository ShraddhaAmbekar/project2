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
data= new Subject<any>();

  constructor() { }
}
