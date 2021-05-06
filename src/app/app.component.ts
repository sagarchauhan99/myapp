import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-app';
  public res:string;
  public Ename:number;
  public Enumber:number;
  i:number=0;
  index:number=0;
  Elist=[];

  addToList(name: any,number: any){
    let payload={Ename:name,Enumber:number}
      
      this.Elist.push(payload);
      console.log(this.Elist);
      this.index++;
     
   }
   
   deleterow(index: number){
     this.Elist.splice(index,1);
    }
   
}
