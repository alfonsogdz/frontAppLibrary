import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import{ UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit{
    public title: string;
    public user: User;
    public token;
    public identity;
    public status: string;
    //private _route: any;
    
    constructor(
       private _route: ActivatedRoute,
       private _router: Router,
       private _userService: UserService
    ){
        this.title = 'Identificate';
        this.user = new User(1, 'ROLE_USER', '', '', '', '');

    }
    ngOnInit(){
       console.log('login.component cargado correctamente!');
     this.logout();
    }

    onSubmit(form){
      console.log(this.user);  

      this._userService.signup(this.user).subscribe(
          response =>{
              //token
              //console.log(response);
              if(response.status != 'error'){
                this.status = 'success';
             this.token = response;
             localStorage.setItem('token', this.token);

              //objeto usuario identificado
              this._userService.signup(this.user, true).subscribe(
                response =>{
                   // console.log(response);
                   this.identity = response;
                   localStorage.setItem('identity', JSON.stringify(this.identity));

                   //redirección
                   this._router.navigate(['home']);
                },
                error =>{
                    console.log(<any>error);
                }
            );
          }else{
           this.status = 'error';

          }
          },
          error =>{
              console.log(<any>error);
          }
      );
    }
    logout(){
        this._route.params.subscribe(params =>{
            let logout = +params['sure'];

            if(logout == 1){
                localStorage.removeItem('identity');
                localStorage.removeItem('token');

                this.identity = null;
                this.token = null;

                //redireccion
               this._router.navigate(['catalago']);

            }

        });
    }

    
}