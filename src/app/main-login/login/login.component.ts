import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username:any
  public password:any
  

  constructor(
    private authservice: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
login(){
    console.log("came here");
   if(this.authservice.login(this.username,this.password))
   {
     this.router.navigateByUrl('/admindash')
   }
  }
  
}
  

