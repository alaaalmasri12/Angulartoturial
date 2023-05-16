import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent,title:'home',
},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'test',component:ContactComponent,title:"contact"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
