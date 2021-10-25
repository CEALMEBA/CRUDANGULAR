import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{

    public logueado:boolean=false;

    login(){
        if(this.logueado){
            return true;
        }else{
            return false;
        }
    }
}