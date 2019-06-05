import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Hero } from 'src/app/shared/hero';

@Component({
  selector: 'app-herograph',
  templateUrl: './herograph.component.html',
  styleUrls: ['./herograph.component.css']
})
export class HerographComponent implements OnInit {
  selectedDataset
  constructor(public dialogRef: MatDialogRef<HerographComponent>,
    @Inject(MAT_DIALOG_DATA) public data :Hero) { }

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

  ngOnInit() {
    this.selectedDataset= [{data:[this.data.offense,this.data.speed,this.data.health,this.data.defense]}];
  }

}
