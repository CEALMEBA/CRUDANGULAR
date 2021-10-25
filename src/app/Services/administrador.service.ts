import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from '../models/Administrador';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  public logged:boolean = false;

  private url : string;

  constructor(private _administradorService: HttpClient) {
    this.url = Global.url;
 ;
  }

  getRecords(){
    var reqHeader = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this._administradorService.get<Administrador[]>(this.url + 'admin',
      {headers:reqHeader} );
  }

  insertRecord(Administrador : Administrador){
    var reqHeader = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this._administradorService.post<Administrador>(this.url + 'admin', Administrador ,{headers:reqHeader});
  }

  updateRecord(Administrador : Administrador , id: number){
    var reqHeader = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this._administradorService.put(this.url + 'admin/' + id, Administrador,{headers:reqHeader})
  }

  deleteRecord(id: number){
    var reqHeader = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this._administradorService.delete(this.url + 'admin/' + id,{headers:reqHeader});
  }

  getOneRecord(id: number){
    var reqHeader = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this._administradorService.get<Administrador>(this.url + 'admin/' +id,{headers:reqHeader});
  }

  login(){
    if(this.logged){
      return true;
  }else{
      return false;
  }

  }

}
