import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchDetails;
  name: string;
  selectedHero
  selectedDataset: any[];
  barChartLabels: string[] = ['offense', 'speed', 'health', 'defense'];
  barChartLegend = false;
  Type = 'line';
  Type2 = 'bar'
  Type3 = 'doughnut'
  Type4 = 'radar'
  color: any = [{ backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"] }]
  color1 = [{ // grey
    backgroundColor: 'red',
    fill: false,
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

  constructor(private Heroservice: HeroService, private route: ActivatedRoute, private router: Router) { }

  getName(): void {
    this.name = this.route.snapshot.paramMap.get('heroName');
  }

  ngOnInit() {
    this.Heroservice.search().subscribe(
      res => { this.searchDetails = res },
      err => { });

    
    
  }
  onSelect(s) {
    this.selectedHero = s;
    this.selectedDataset = [{ data: [this.selectedHero.offense, this.selectedHero.speed, this.selectedHero.health, this.selectedHero.defense] }];
    this.Heroservice.HeroForm = this.selectedHero;
  }

  onSubmit(form: NgForm){
    this.Heroservice.putHero(form.value).subscribe();
    this.selectedDataset = [{data:[this.selectedHero.offense,this.selectedHero.speed,this.selectedHero.health,this.selectedHero.defense]}];
  }
  delete(hero){
    this.searchDetails= this.searchDetails.filter(h => h !== hero);
    this.Heroservice.deleteHero(hero).subscribe();
    this.selectedHero = null;
   
    
    
  }

}
