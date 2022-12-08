import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Book } from  '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: '../book-new/book-new.component.html',
  styleUrls: ['./book-edit.component.css'],
  providers: [UserService, BookService]
})
export class BookEditComponent implements OnInit {
  public page_title: string;
  public book: Book;
  public token;
  public status_book;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _bookService: BookService

  ) { 
    this.token = this._userService.getToken();

  }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = +params['id'];
    this.getBook(id);
  });
  
  }
  getBook(id){
      this._bookService.getBook(id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.book = response.book;
            this.page_title = 'Editar '+ this.book.title;

          }else{
            this._router.navigate(['home']);
          }

        },
        error =>{
          console.log(<any>error);

        }
      );
   

  }
  onSubmit(form){
    //servicio

    console.log(this.book.id);
    this._bookService.update(this.token, this.book, this.book.id).subscribe(
      response =>{
      //  console.log(response);
      if(response.status == 'success'){
        
        this.status_book = 'success';
        this.book = response.book;
        this._router.navigate(['/libro', this.book.id]);

      }else{
        this.status_book = 'error';

      } 
      },
      error =>{
        console.log(<any>error);
        this.status_book = 'error';
      }
    )

    

  }

}
    