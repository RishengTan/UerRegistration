import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmarttableComponent } from './smarttable.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path:'smarttable', component:SmarttableComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmarttableRoutingModule { }
