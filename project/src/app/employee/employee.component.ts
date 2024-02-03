import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

  export class EmployeeComponent {
  
    @Output() onRemoveEmployee = new EventEmitter<number>();
    @Output() onEditEmployee = new EventEmitter<number>();
  
    constructor() {
    }
  
  }
