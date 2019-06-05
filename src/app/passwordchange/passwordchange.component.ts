import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent implements OnInit {

  constructor(private s : UserService, private http : HttpClient) { }

  ngOnInit() {
    this.s.passwordchangeForm.reset();

  }
 
  submit(){
    this.s.changepassword().subscribe();
    this.s.passwordchangeForm.reset();
  }
}
