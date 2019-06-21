import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: []
})
export class Table1Component implements OnInit {
  firstname
  lastname
  DOB
  Address
  constructor(public dialogRef: MatDialogRef<Table1Component>,public Clientservice : ClientService,
    @Inject(MAT_DIALOG_DATA) public data ) { }

  ngOnInit() {
    this. firstname = this.data.firstname,
    this.lastname =  this.data.lastname,
    this. DOB = this.data.DOB,
    this.Address = this.data.Address;
  }
  onSubmit(form: NgForm){
    this.Clientservice.ClientForm = form.value;
    this.Clientservice.puttable1().subscribe();
    
  }

}
