import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student:Student[]=[
    {id:1,title:"alaa",age:25},
    {id:2,title:"asdasd",age:2},
    {id:3,title:"asdasd",age:225},

  ]
  constructor() { 

    
  }
}
