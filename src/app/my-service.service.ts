import { Injectable } from '@angular/core';

export class User {
  constructor(
    public user: string,
    public pswd: string) { }
}

@Injectable()
export class MyServiceService {

  constructor() { }

}
