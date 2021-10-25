import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Credential } from 'src/app/Models/Credential';
import { AuthService } from 'src/app/Services/auth.service';
import { CredentialService } from 'src/app/Services/Credential.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  credential = new Credential();
  constructor(private router:Router,
    private _authS : AuthService,
    private _credentialService : CredentialService,
    private _snackBar : MatSnackBar) { }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  login(){
    this._credentialService.inset(this.credential).subscribe(
      success =>{
        this._authS.logueado = true;
        console.log(success);
        this.openSnackBar('Bienvenido Super Administrador', 'Cerrar');
        localStorage.setItem('token', success.token);
        this.router.navigate(['/administrador']);

        console.log(success);
      },
      err =>{
        this.router.navigate(['/'])
        this.openSnackBar('Usuario no registrado', 'Cerrar');
        console.log(err);
      }
    )

  }
  prueba(){
    this._credentialService.getRecords().subscribe(
      (success) =>{
        console.log('hola');
      },
      (err)=>{
        console.log(err);

      }
    )
  }

}
