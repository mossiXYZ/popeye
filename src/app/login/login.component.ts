import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title = 'POPEYE Analyse ';

  constructor(private auth: AuthService) { }


  login(){
    this.auth.login();
  }

}
