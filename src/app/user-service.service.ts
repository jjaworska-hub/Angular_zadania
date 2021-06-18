import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  serviceVariable: string = '';

  constructor() { }

  setUser(name: string){
    this.serviceVariable = name;
  }

  getUser(){
    return this.serviceVariable;
  }

}
