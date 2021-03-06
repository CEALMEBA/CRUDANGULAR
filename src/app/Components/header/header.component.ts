import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private  _authS : AuthService, private router:Router) { }

  ngOnInit() {
  }
  isLoggedIn(){
    this.isLogged = this._authS.login();
    return this.isLogged;
  }

  logOut(){
    this._authS.logueado = false;
    this.router.navigate(['/'])
  }

}
