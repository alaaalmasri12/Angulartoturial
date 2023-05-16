import { Component,OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:Student[]=[]
constructor(private _StudentService:StudentService)
{

}
  ngOnInit(): void {
   this.users=this._StudentService.student;
  }
}
