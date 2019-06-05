import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css']
})
export class UsersigninComponent implements OnInit {

  constructor(private service: UserService, private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.service.RegisterForm.reset();
  }
  onsubmit() {
    this.service.login().subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.route.navigateByUrl('/home');
      },
      err => {

      }
    );
  }
}
