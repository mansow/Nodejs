import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private key : AuthService) { }
  myForm: any
  ngOnInit() 
{
      this.myForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, Validators.required),
      email   : new FormControl(null, [Validators.email,
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    });
  }
  log(data: any) {
    this.myForm.username = data.username;
    this.myForm.password = data.password;
    this.myForm.email = data.email;
    this.key.login(this.myForm.username, this.myForm.password, this.myForm.email)
      .subscribe( data => { 
      //     console.log("login Success: " + data); 
         if(data) 
    {
      // alert('login successful')
      this.route.navigate(['/display']);
    }
    else
         {
              // alert('login failed ! please check login credentials.')
              this.route.navigate(['/login'])
         } 
         
    });
    }
 
        }

