import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Book } from  '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [UserService, BookService]
})
export class BookDetailComponent implements OnInit {
  public book: Book;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();

  }
  getBook(){
    this._route.params.subscribe(params =>{
      let id = +params['id'];

      this._bookService.getBook(id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.book = response.book;

          }else{
            this._router.navigate(['home']);
          }

        },
        error =>{
          console.log(<any>error);

        }
      );
    });

  }
 
}
