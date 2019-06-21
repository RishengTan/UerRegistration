import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table2.component.html',
  styleUrls: []
})
export class Table2Component implements OnInit {
  firstname
  lastname
  DOB
  LicenseNumber
  constructor(public dialogRef: MatDialogRef<Table2Component>,public Clientservice : ClientService,
    @Inject(MAT_DIALOG_DATA) public data ) { }

  ngOnInit() {
    this. firstname = this.data.firstname,
    this.lastname =  this.data.lastname,
    this. DOB = this.data.DOB,
    this.LicenseNumber = this.data.LicenseNumber;
  }
  onSubmit(form: NgForm){
    this.Clientservice.ClientForm = form.value;
    this.Clientservice.puttable2().subscribe();
    
  }

}