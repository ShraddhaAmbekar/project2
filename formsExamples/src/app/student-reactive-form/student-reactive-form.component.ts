import { Component } from '@angular/core';
import {FormGroup, Validators,FormBuilder,FormControl } from '@angular/forms'


@Component({
  selector: 'app-student-reactive-form',
  templateUrl: './student-reactive-form.component.html',
  styleUrls: ['./student-reactive-form.component.scss']
})
export class StudentReactiveFormComponent {
  studentForm!:FormGroup;

  constructor(private formBuilder: FormBuilder){};

   ngOnInit(){
     this.formLoad();

    this.studentForm.controls['firstName'].valueChanges.subscribe(res=>{;
      this.createFullName()})
    this.studentForm.controls['middleName'].valueChanges.subscribe(res=>{
       this.createFullName()})
    this.studentForm.controls['lastName'].valueChanges.subscribe(res=>{
      this.createFullName()})
    };

    

   formLoad(){
    this.studentForm=this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(3)]],
      middleName:['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      fullName:[''],
      dob:['',[Validators.required]],
      age:['',[Validators.required, Validators.minLength(2)]],
      licenceNo:[],
      country:['',[Validators.required]],
      state:[''],
      identityType:[''],
      cardNo:['']
    })}

    createFullName() {
      const fullName = this.studentForm.controls['firstName'].value + ' ' + this.studentForm.controls['middleName'].value+ ' ' + this.studentForm.controls['lastName'].value;

      this.studentForm.controls['fullName'].setValue(fullName);//set value this method is used to change value
      if(this.studentForm.controls['fullName'].value.trim() !== '') {//trim function used to remove disable when empty trim remove starting and ending extra spaces
             this.studentForm.controls['fullName'].disable();
      } else {
            this.studentForm.controls['fullName'].enable();
      }
    }


  ngAfterViewInit() {
   this.studentForm.controls['dob'].valueChanges.subscribe(res=>{
      // debugger;
       const selectedDob = new Date(res);
       const dobYear = selectedDob.getFullYear();
       const curerntYear =  new Date().getFullYear(); 
       const age = curerntYear - dobYear;

       this.studentForm.controls['age'].setValue(age)
       if(age > 18) {
         this.studentForm.controls['licenceNo'].setValidators(Validators.required);
       } else {
         this.studentForm.controls['licenceNo'].removeValidators(Validators.required);
       }
    })

      this.studentForm.controls['country'].valueChanges.subscribe(res=>{
       if(res === 'India') {
         this.studentForm.controls['state'].setValidators(Validators.required);
       } else {
         this.studentForm.controls['state'].removeValidators(Validators.required);
       }
     })
    
     this.studentForm.controls['identityType'].valueChanges.subscribe(res=>{
       if(res == 'Aadhar Card') {
         this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$'))
       } else {
         this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'))
       }
     })
    }

}
