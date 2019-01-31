import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { UsersComponent }      from './users/users.component';
import { SeriesComponent }      from './series/series.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminSeriesComponent } from './admin/admin-series/admin-series.component';
import { SerieFormComponent } from './admin/serie-form/serie-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent 
},
  { path: 'login', component: LoginComponent },
  { path: 'series', component: SeriesComponent},
  
  { path: 'users', component: UsersComponent , canActivate: [AuthGuard]},
  { path: 'admin/series', component: AdminSeriesComponent, canActivate: [AuthGuard] },
  { path: 'admin/series/new', component: SerieFormComponent, canActivate: [AuthGuard] },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
