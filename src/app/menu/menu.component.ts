import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

const behaviorSubject = new BehaviorSubject('event 1');  
const subject =  new Subject()

subject.next('Good')
subject.subscribe((res)=>{
  console.log(res)
})



behaviorSubject.next('Very Good')
behaviorSubject.subscribe((res)=>{
  console.log(res)
})
behaviorSubject.next('Morning')


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent{
  constructor()
  {
  }





}
