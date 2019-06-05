import { Component, ViewChild, OnInit, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService } from '../shared/hero.service';


import { Hero } from '../shared/hero';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HerographComponent } from './herograph/herograph.component';
import { EditComponent } from './edit/edit.component';
import { AddheroComponent } from '../addhero/addhero.component';



@Component({
  selector: 'app-smarttable',
  templateUrl: './smarttable.component.html',
  styleUrls: ['./smarttable.component.css']
})
export class SmarttableComponent implements OnInit {
  searchKey: string
  dataSource: MatTableDataSource<any>
  list: Hero[] = []
  selectedDataset : any[];
  displayedColumns = ['heroID', 'heroName', 'health', 'speed',  "offense", 'actions', 'actions2', 'actions3'];
  constructor(private Heroservice: HeroService, private dialog: MatDialog) {
  }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;




  ngOnInit() {
    this.Heroservice.getHero().subscribe(
      res => {
        this.list = res;
        this.dataSource = new MatTableDataSource(this.list);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });

  }

  delete(hero: Hero) {
    this.list = this.list.filter(h => h !== hero);
    this.Heroservice.deleteHero(hero).subscribe();
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  launch(hero:Hero): void{
    const dialogRef = this.dialog.open(HerographComponent, {
      width: '550px',
      height: '550px',
      data: {name: hero.heroName, offense : hero.offense, speed : hero.speed, health : hero.health, defense: hero.defense }
  });

  }

  filter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  edit(hero:Hero): void{
    const dialogRef = this.dialog.open(EditComponent, {
      width: '550px',
      height: '550px',
      data: {heroID: hero.heroID, heroName: hero.heroName, offense : hero.offense, speed : hero.speed, health : hero.health, defense: hero.defense }
  });
  }

  add(){
    const dialogRef = this.dialog.open(AddheroComponent, {
      width: '550px',
      height: '550px',
      
  });
  }
  




}

