import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { AddheroComponent } from './addhero/addhero.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {
    path: 'register', component: UserRegistrationComponent
  },
  { path: 'signin', component: UsersigninComponent },
  { path: 'addhero', component: AddheroComponent,canActivate:[AuthGuard] },
  { path: 'searchResult', component: SearchResultComponent,canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},

  { path: 'passwordchange', component: PasswordchangeComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
