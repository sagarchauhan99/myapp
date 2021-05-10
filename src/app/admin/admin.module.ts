import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { FormsModule } from '@angular/forms';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

@NgModule({
  declarations: [ AdmindashComponent, EmpDetailComponent ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ AdmindashComponent , EmpDetailComponent]
})
export class AdminModule { }
