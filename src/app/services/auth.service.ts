import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Signindto } from '../interfaces/signindto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH: string = 'fulltimeforce_auth';

  constructor() { }

  isAuthenticated(): boolean{
    return !_.isNil(localStorage.getItem(this.AUTH));
  }

  signin(auth: Signindto): boolean{
    const data = 'admin';

    if (auth.username === data && auth.password === data){
      localStorage.setItem(this.AUTH, JSON.stringify(auth));
      return true;
    }

    return false;
  }
}
