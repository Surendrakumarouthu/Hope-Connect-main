import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  username='';
  user:any;
  password='';
  reqpwd='';
  checkLogin(){
   this.reqpwd=this.username.slice(0,3)+"123";
   console.log(this.reqpwd)
   console.log(this.username)
   console.log(this.password)
    if(this.reqpwd==this.password){
   alert("Success");
   this.user={
    username:this.username
   }
   localStorage.setItem("loggedin",JSON.stringify(this.user));
   this.router.navigateByUrl('user/product')
    }
    else{
      alert("Invalid Credentials")
    }
  }

}
