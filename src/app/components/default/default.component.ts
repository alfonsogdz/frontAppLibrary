import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Book } from  '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
    selector: 'default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css'],
    providers: [UserService, BookService]
})
export class DefaultComponent implements OnInit {
    public title: string;
    public books: Array<Book>;
    public token;
   
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _bookService: BookService
    ) {
        this.title = 'Inicio';
        this.token = this._userService.getToken();
        
    }
    ngOnInit() {
        console.log('default.component cargado correctamente!');
        this.getBooks();
    }
    getBooks(){
        this._bookService.getBooks().subscribe(
            response =>{
                if(response.status == 'success' ){
                    this.books = response.books;

                }
                //console.log(response);

            },
            error =>{
                console.log(error);
            }
        );

    }
    deleteBook(id){
        this._bookService.delete(this.token, id).subscribe(
            response =>{
               // this._router.navigate['/home'];
               this.getBooks();

            },
            error =>{
                console.log(<any>error)
            }
        );
    }
 

}
    
