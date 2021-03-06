import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
public name: any
public id: any
public dept: any
public email: any
public pass: any
public details:any={}

  ngOnInit() {
    this.getRoutes()
  }
getRoutes()
{
  this.activeRoute.params.subscribe((data)=>{
    console.log(data, 'data from routes');
    this.id=data.id;

    
  });

  this.activeRoute.queryParams.subscribe((data)=>{
    console.log(data,'querryprams');
    this.details=JSON.parse(data.data)
    console.log(this.details,'details');
     this.name=this.details.name;
     this.dept=this.details.dept;
     this.email=this.details.mail;
     this.pass=this.details.pass;
  });
}
}
