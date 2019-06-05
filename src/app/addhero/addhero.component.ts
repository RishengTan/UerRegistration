import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css']
})
export class AddheroComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddheroComponent>,private Heroservice:HeroService) { }

  ngOnInit() {
    this.Heroservice.addheroForm.reset();
  }
  onSubmit(){
    this.Heroservice.addHero().subscribe();
    this.Heroservice.addheroForm.reset();
  }
}
