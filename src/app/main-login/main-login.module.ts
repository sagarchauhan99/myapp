import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login1Component } from './login1/login1.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Login1Component,
    LoginComponent,
  ],
  imports: [
    CommonModule,
   FormsModule,
  ],
  exports:[Login1Component,
  LoginComponent]
})
export class MainLoginModule { }
