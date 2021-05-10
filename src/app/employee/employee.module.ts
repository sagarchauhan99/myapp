import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpdashComponent } from './empdash/empdash.component';

@NgModule({
  declarations: [ EmpdashComponent],
  imports: [
    CommonModule
  ],
  exports:[EmpdashComponent]
})
export class EmployeeModule { }
