import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Hero } from 'src/app/shared/hero';
import { NgForm } from '@angular/forms';
import { HeroService } from 'src/app/shared/hero.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  heroName:String
  offense
  speed
  health
  defense
  heroID
  constructor(public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data :Hero, public Heroservice : HeroService) { }

  ngOnInit() {
    this.heroName = this.data.heroName,
    this.offense =  this.data.offense,
    this.speed = this.data.speed,
    this.health = this.data.health,
    this.defense = this.data.defense,
    this.heroID = this.data.heroID;
  }

  onSubmit(form: NgForm){
    this.Heroservice.HeroForm = form.value;
    this.Heroservice.putHero().subscribe();
  }

}
