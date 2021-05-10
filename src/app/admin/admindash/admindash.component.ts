import { JsonPipe } from '@angular/common';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { inherits } from 'util';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {
  public res:string;
  public Ename:any;
  public id:any;
  public Edept:any
  public Email:any
  public Epass:any
  public name;
  public number
  public dept
  public email
  public pass
  i:number=0;
  index:number=0;
 public Elist=[
    {
      Ename:"sagar",
      id:"09",
      Edept:"IT",
      Email:"sagarcx@gmail.com",
      Epass:"sagar123"
    },
    {
      Ename:"shubham",
      id:"10",
      Edept:"IT",
      Email:"shubham@gmail.com",
      Epass:"shubham123"
    },
    {
      Ename:"sahil",
      id:"11",
      Edept:"IT",
      Email:"sahil@gmail.com",
      Epass:"sahil123"
    },
    {
      Ename:"priya",
      id:"12",
      Edept:"IT",
      Email:"priya@gmail.com",
      Epass:"priya123"
    },
    {
      Ename:"piya",
      id:"13",
      Edept:"IT",
      Email:"piya@gmail.com",
      Epass:"piya123"
    },
  ];
  constructor(private router: Router) { 
    
  }

  ngOnInit() {

  }
  addToList(){
    let payload={Ename:this.name,id:this.number,Edept:this.dept,Email:this.email,Epass:this.pass}
      
      this.Elist.push(payload);
      console.log(this.Elist);
      let key=localStorage.key(this.index);
      localStorage.setItem(key,JSON.stringify(this.Elist));
      this.index+=1;
  
   }
   
   deleterow(index: number){
     this.Elist.splice(index,1);
     let key=localStorage.key(index);
     localStorage.removeItem(key);
    }
   editrow(index){
     let key=localStorage.key(index);
     JSON.parse(localStorage.getItem(key));
     this.name=JSON.parse(localStorage.getItem('validuser'))[index].Ename;
     this.number=JSON.parse(localStorage.getItem(key))[index].id;
     this.dept=JSON.parse(localStorage.getItem(key))[index].Edept;
     this.email=JSON.parse(localStorage.getItem(key))[index].Email;
     this.pass=JSON.parse(localStorage.getItem(key))[index].Epass;
        
    }

   show(data){
    let querrtyParameters={
      name:data.Ename,
      id:data.id,
      dept:data.Edept,
      mail:data.Email,
      pass:data.Epass

    }
    console.log(data,"data from table");
    this.router.navigate(['/emp-detail/',`${data.id}`],{queryParams:{data:JSON.stringify(querrtyParameters)}})
   } 

}
