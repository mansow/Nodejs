import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Apimethods } from './apimethods';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  constructor(private route :Router,private api : ApiService) { }
studentlist: any = [];
createForm: any;

studet:Apimethods = new Apimethods() // import the object from the class Apimethods to use the objects declared for http
  
ngOnInit(): void {

    this.createForm = new FormGroup({
      name : new FormControl(null,Validators.required),
      age: new FormControl(Validators.required),
      course:new FormControl(null,Validators.required),
      location: new FormControl(null,Validators.required),
      id : new FormControl(null,Validators.required),
    })
    this.get()

  }

  get()
  {
    
    this.api.getMethod().subscribe((data)=>{
      this.studentlist = data;
      console.log(this.studentlist)
    })
  }

add()
        // this.studentlist.push(this.createForm.value)
        {
         this.studet.name = this.createForm.get('name').value;
         this.studet.age = this.createForm.get('age').value;
         this.studet.course = this.createForm.get('course').value;
         this.studet.location = this.createForm.get('location').value;
         this.studet.id = this.createForm.get('id').value;
// all values from form will get appended to this object studet
          
this.api.postMethod(this.studet).subscribe((data)=>{
          console.log(data)
          this.get();
          this.createForm.reset()
         })}

 
  update(data : any)
  {
    this.studet.id = data.id;
    this.createForm.controls['name'].setValue(data.name)
    this.createForm.controls['age'].setValue(data.age)
    this.createForm.controls['course'].setValue(data.course)
    this.createForm.controls['location'].setValue(data.location)
    this.createForm.controls['id'].setValue(data.id)
  }

  updatedForm()
  {
    this.studet.name = this.createForm.get('name').value;
    this.studet.age = this.createForm.get('age').value;
    this.studet.course = this.createForm.get('course').value;
    this.studet.location = this.createForm.get('location').value;
    this.studet.id = this.createForm.get('id').value;

    this.api.putMethod(this.studet,this.studet.id).subscribe((data)=>{
      console.log(data);
      this.get();
 
    });

  }

  delete(student : any)
  {
    this.api.deleteMethod(student.id).subscribe((data)=>{
      console.log(data)
      alert("values deleted")
      this.get()
    })
  }

}


 