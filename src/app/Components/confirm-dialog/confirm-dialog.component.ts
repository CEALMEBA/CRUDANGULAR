import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Administrador } from 'src/app/Models/Administrador';
import {AdministradorService  } from 'src/app/Services/administrador.service';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
   id:number;
   title:String;
   catalog : number;
   admin = new Administrador();
  constructor(private _administradorService : AdministradorService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.id = data.id;
      this.catalog = data.catalog;
      this.title = data.title;
     }
     openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 3000,
      });
    }

    closeDialog(): void {
      this.dialog.close(true);
    }
  ngOnInit() {
    if(this.catalog == 1){
      this.getOneAdministrador();


    }
  }
  getOneAdministrador(){
    this._administradorService.getOneRecord(this.id).subscribe(
      success =>{
        this.admin = success;
      },
      error =>{
        alert(error);
      }
    )
  }
  updateAdministrador(successMsg : string, errorMsg){
    this._administradorService.updateRecord(this.admin, this.id).subscribe(
      success =>{
        this.closeDialog();
        this.openSnackBar(successMsg, 'Cerrar');
      },
      err => {
        this.openSnackBar(errorMsg, 'Cerrar');
      }
    )
  }

}
