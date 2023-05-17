import { Component,OnInit,OnDestroy } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { PostdataService } from '../postdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts:any[]=[]
subEnd:Subscription=new Subscription();
constructor(private _PostdataService:PostdataService)
{

}
  ngOnInit(): void {
  this.subEnd=this._PostdataService.getposts().subscribe({
next:(data)=>{this.posts=data.recipes}
   });
   
  }
  ngOnDestroy():void
  {
this.subEnd.unsubscribe();
  }
}
