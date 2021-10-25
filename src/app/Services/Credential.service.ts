import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './global';
import {User} from '../Models/User';
import { Credential } from '../Models/Credential';
@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  url : string;

  constructor(private _credentialService : HttpClient) {
    this.url = Global.url;
  }

  inset(user : Credential){
    return this._credentialService.post<User>(this.url + 'credentials' ,user , {headers:
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
  }
  getRecords(){
    return this._credentialService.get(this.url + 'credentials', {headers:
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } } );
  }
}



