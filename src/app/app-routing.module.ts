import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'home' , component:HomeComponent} ,
  {path : 'admin' , component:AdminComponent},
  {path : 'jobs' , component:JobsComponent},
  {path : 'job-details' , component:JobsComponent},
  {path : '**' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
