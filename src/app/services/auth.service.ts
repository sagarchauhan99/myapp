import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashComponent } from '../admin/admindash/admindash.component'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router:Router
  ) { }
  
  login(username,password)
  {
    if(username=="admin" && password=="admin")
    {
      localStorage.setItem('validuser','pass')
      return true
    }
    this.router.navigateByUrl('')
    return false  
  }

  Elogin(id,username,password)
  {
    if((id=="09" && username=="sagarcx@gmail.com" && password=="sagar123")|| (id=="10" && username=="shubham@gmail.com" && password=="shubham123") ||(id=="11" && username=="sahil@gmail.com" && password=="sahil123")||(id=="12" && username=="priya@gmail.com" && password=="priya123")||(id=="13" && username=="piya@gmail.com" && password=="piya123")){
      localStorage.setItem('validuser','pass')
      return true
    }
    this.router.navigateByUrl('')
    return false
  }

  logout()
  {
    localStorage.removeItem('currentUser')
  }
  isloggedIn()
  {

  } 
}
