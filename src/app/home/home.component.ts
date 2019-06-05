import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HeroService } from '../shared/hero.service';
import { NgForm } from '@angular/forms';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {


  userDetails;
  searchDetails;
  Heroes: any[];
  selectedHero;
  selectedDataset: any[];
  constructor(private route: Router, private service: UserService, private Heroservice: HeroService) { }
  
  barChartLabels: string[] = ['offense', 'speed', 'health', 'defense'];
  barChartLegend = false;
  Type = 'line';
  Type2= 'bar'
  Type3= 'doughnut'
  Type4= 'radar'
  color:any=[{backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"]}]
  color1=[ { // grey
    backgroundColor: 'red',
    fill:false,
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"],
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }]
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    
  };
  
  ngOnChanges(){
    this.Heroservice.getHero().subscribe(
      res =>{this.Heroes = res},
      err =>{},
    );
  }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => { this.userDetails = res },
      err => { },
    );

    this.Heroservice.getHero().subscribe(
      res =>{this.Heroes = res.slice(0,5)},
      err =>{},
      
    );
      
    
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('register');
  }

  passwordchange() {
    this.route.navigateByUrl("/passwordchange")
  }

  search() {
    this.Heroservice.search().subscribe(
      res => { this.searchDetails = res },
      err => { },
    );
    this.route.navigateByUrl('searchResult');
  }

  onSelect(Heroes:Hero){
    this.selectedHero = Heroes;
    this.selectedDataset = [{data:[Heroes.offense,Heroes.speed,Heroes.health,Heroes.defense]}];
    this.Heroservice.HeroForm = Heroes;
  }


  onSubmit(){
    this.Heroservice.putHero().subscribe();
    this.selectedDataset = [{data:[this.selectedHero.offense,this.selectedHero.speed,this.selectedHero.health,this.selectedHero.defense]}];
  }

  delete(hero){
    this.Heroes= this.Heroes.filter(h => h !== hero);
    this.Heroservice.deleteHero(hero).subscribe();
    this.selectedHero = null;
   
    
    
  }

  addHero(){
    this.route.navigateByUrl('addhero');
  }
  

  resetForm(){
    this.Heroservice.HeroForm = {
      heroID : 0,
      heroName:'',
      speed:0,
      health:0,
      offense:0,
      defense:0
    }
  }
}
