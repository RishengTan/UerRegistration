import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmarttableRoutingModule } from './smarttable-routing.module';
import { SmarttableComponent } from './smarttable.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HerographComponent } from './herograph/herograph.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material';
import { ChartsModule } from "ng2-charts";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditComponent } from './edit/edit.component';
import { HeroService } from '../shared/hero.service';
import { AddheroComponent } from '../addhero/addhero.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';



@NgModule({
  declarations: [SmarttableComponent, HerographComponent, EditComponent, Table1Component, Table2Component],
  imports: [
    CommonModule,
    SmarttableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  entryComponents:[HerographComponent,EditComponent,AddheroComponent, Table1Component, Table2Component],
  providers:[MatDialog,HeroService]
})
export class SmarttableModule { }
