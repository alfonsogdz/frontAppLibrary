import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Book } from  '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [UserService, BookService]
})
export class CatalogComponent implements OnInit {
  public title: string;
  public books: Array<Book>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _bookService: BookService

  ) { 

  }

  ngOnInit() {
    console.log('catalog.component cargado correctamente!');
    //this.loadScript();
        this.getBooks();

  }
  getBooks(){
    this._bookService.getBooks().subscribe(
        response =>{
            if(response.status == 'success' ){
                this.books = response.books;
                
                this.books.forEach(element => console.log(element));
            }
            //console.log(response);
        },
        error =>{
            console.log(error);
        }
    );

}
// public loadScript() {
//   let body = <HTMLDivElement> document.body;
//   let script = document.createElement('script');
//   script.innerHTML = '';
//  // script.src = '../../assets/JS/pinterest_grid.js';
//   script.async = true;
//   script.defer = true;
//   body.appendChild(script);
// }

}
