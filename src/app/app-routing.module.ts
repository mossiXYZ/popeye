import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { UsersComponent }      from './users/users.component';
import { SeriesComponent }      from './series/series.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'users', component: UsersComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
