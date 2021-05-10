import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { EmpdashComponent } from './employee/empdash/empdash.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './main-login/login/login.component';
import { AuthService } from './services/auth.service';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { Login1Component } from './main-login/login1/login1.component';
import { AppComponent } from './app.component';
import { EmpDetailComponent } from './admin/emp-detail/emp-detail.component';


const routes: Routes = [
  {path:'adminlogin',component: LoginComponent},
  {path:'admindash',component: AdmindashComponent,canActivate:[AuthGuard]},
  {path: 'empdash', component: EmpdashComponent,canActivate:[AuthGuard]},
  {path: 'emplogin',component:Login1Component},
  {path: 'emp-detail/:id',component:EmpDetailComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
