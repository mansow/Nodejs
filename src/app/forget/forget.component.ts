import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

forForm:any
  ngOnInit(): void{
   this.forForm = new FormGroup({
   email: new FormControl(null,[Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
   password: new FormControl(null, Validators.required),
   reenterpassword: new FormControl(null, Validators.required),
   })  
}
  
}
