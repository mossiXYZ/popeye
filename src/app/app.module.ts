import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { AdminSeriesComponent } from './admin/admin-series/admin-series.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SerieFormComponent } from './admin/serie-form/serie-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SerieService } from './shared/serie.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SeriesComponent,
    AdminSeriesComponent,
    LoginComponent,
    UsersComponent,
    SerieFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module
    AngularFireAuthModule, 
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    SerieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
