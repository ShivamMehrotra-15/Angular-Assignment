import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = []

  constructor() { }

  addUser(user: object){
    this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

}
