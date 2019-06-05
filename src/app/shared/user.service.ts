import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  RegisterForm = this.fb.group({
    UserName: [''],
    Email: [''],
    Password: ['']
  });

  loginForm = this.fb.group({
    UserName : [''],
    Password:['']
  });
  passwordchangeForm = this.fb.group({
    currentpass : [''],
    newpass:['']
  });

  


  register() {
    var body = {
      UserName: this.RegisterForm.value.UserName,
      Email: this.RegisterForm.value.Email,
      Password: this.RegisterForm.value.Password
    };
    return this.http.post('http://localhost:53240/api/User/R', body);
  }

  login(){
    var body = {
      UserName: this.loginForm.value.UserName,
      Password: this.loginForm.value.Password
    };
    return this.http.post("http://localhost:53240/api/User/Login", body);
  }

  getUserProfile(){
    return this.http.get("http://localhost:53240/api/UserProfile");
  }

  changepassword(){
    var body={
      currentpass: this.passwordchangeForm.value.currentpass,
      newpass: this.passwordchangeForm.value.newpass,
    }
    return this.http.post("http://localhost:53240/api/UserProfile/Passwordchange", body);
  }

  
}


