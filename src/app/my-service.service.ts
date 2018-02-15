import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

export class User{

  constructor()
  {}
  public name:String;
  public pswd:String;

}

export const users: User[] = [
  { name:"sny", pswd: 'sny' },
  { name:"tst", pswd: 'tst' },
 
];




@Injectable()
export class MyServiceService {

  constructor( private _router: Router) { }

  logout() {
   
  }

  login(user){
  console.log("login credentials",user);
  var authenticatedUser = users.find(u => u.name === user.name);
  console.log("authenticated user",authenticatedUser);
  if(authenticatedUser.pswd === user.pswd)
  {
    this._router.navigate(['Home']);
  }
 else{
  this._router.navigate(['Login']);
 }

  }
 
   checkCredentials(){
   

}

}