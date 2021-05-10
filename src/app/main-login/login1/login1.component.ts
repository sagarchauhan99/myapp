import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {
public username:any
public password:any
public id:any

  constructor(
    private authservice: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  Elogin(){
    console.log("came here");
   if(this.authservice.Elogin(this.id,this.username,this.password))
   {
     this.router.navigateByUrl('/empdash')
   }
  }
  

}
