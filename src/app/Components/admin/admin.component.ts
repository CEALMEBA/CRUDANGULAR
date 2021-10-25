import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Administrador } from 'src/app/Models/Administrador';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {AdministradorService} from 'src/app/Services/administrador.service';
import { Credential } from 'src/app/Models/Credential';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin = new Administrador();
  credential = new Credential();
  adminToEdit = new Administrador();
  admins: Administrador[]=[];
  displayedColumns: string[] =[ 'id', 'name', 'lastName', 'area', 'status', 'email', 'actions'];
  dataSource;


  constructor(private _administradorService : AdministradorService, private _snackBar: MatSnackBar,private dialogo: MatDialog) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.getAdministradores();

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSubmit(){
    this._administradorService.insertRecord(this. admin).subscribe(
      success =>{
        this.openSnackBar('Agregado con éxito', 'Cerrar');
        this.getAdministradores();
        this.resetForm();
      },
      err=>{
        this.openSnackBar('Error al registrar', 'Cerrar');
      }
    )
}

  getAdministradores(){
    localStorage.getItem('token');
    this._administradorService.getRecords().subscribe(
      success =>{
        console.log(success)
        this.admins  = success;
        this.dataSource = new MatTableDataSource<Administrador>(this.admins);
        this.dataSource.paginator = this.paginator;

      },
      err =>{
        console.log(err)
      }
    )
  }

  openDialog(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      catalog : 1,
      id: id
    }

    this.dialogo.open(ConfirmDialogComponent, dialogConfig);

    const dialogRef = this.dialogo.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.getAdministradores()
    )

  }

  deleteOneRecord(id: number){
    if(confirm('Confirmar eliminación de registro ' )){
      this.deleteRecord(id)
    }
  }

  deleteRecord(id: number){
    this._administradorService.deleteRecord(id).subscribe(
      success =>{
        this.openSnackBar('Eliminado con éxito', 'Cerrar');
        this.getAdministradores();
      },
      err => {
        this.openSnackBar('Error al eliminar', 'Cerrar');
      }
    )
  }


  resetForm(){
    this.admin.id = 0;
    this.admin.names = '' ;
    this.admin.fullname = '' ;
    this.admin.area = '' ;
    this.admin.status = '' ;
    this.admin.Email = '' ;
  }



}
