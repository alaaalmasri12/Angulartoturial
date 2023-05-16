import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MobieComponent } from './mobie/mobie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { WebComponent } from './web/web.component';

const routes:Routes=[
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'about',component:AboutComponent,title:'about',children:[
    {path:'',component:WebComponent},
    {path:'mobile',component:MobieComponent},
  ]},
  {path:'parent',component:ParentComponent},
  {path:'test',component:ContactComponent,title:"contact"},
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
