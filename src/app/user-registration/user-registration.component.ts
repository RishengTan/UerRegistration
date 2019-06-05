import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(public s: UserService) { }

  ngOnInit() {
    this.s.RegisterForm.reset();
  }

  onSubmit() {
    this.s.register().subscribe();
    this.s.RegisterForm.reset();
  }

}
