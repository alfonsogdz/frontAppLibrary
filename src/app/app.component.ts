import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  //title = 'app';
  public identity;
  public token;

  constructor(
    private _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
  ngOnInit(){
    console.log('app.component cargado');

  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    

  }
}
