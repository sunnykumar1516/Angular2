import { Component, OnInit } from '@angular/core';
import {MyServiceService, User} from '../my-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User = {
    name: "",
    pswd: ""
  };
  public errorMsg = '';
 


  constructor(private _service:MyServiceService) { }

  ngOnInit() {
      
  }
 
  login() {
    
   this. _service.login(this.user);
}
}
