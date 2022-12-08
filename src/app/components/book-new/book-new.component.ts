import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../../services/user.service';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
  providers: [UserService, BookService]
})
export class BookNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public book: Book;
  public status_book: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _bookService: BookService
  ) { 
    this.page_title = 'Crear nuevo libro';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }

  ngOnInit() {
    if(this.identity == null){
      this._router.navigate(["/login"]);
    }else{
      //crear objeto libro
      this.book = new Book(1, '','','', '', 1, '', null, null);

    }
  }
  onSubmit(form){
   // console.log(this.book);
    //console.log(this._bookService.pruebas);
    this._bookService.create(this.token, this.book).subscribe(
      response =>{
        console.log(response);

        if(response.status == 'success'){
          this.book = response.book;
          this.status_book = 'success';
          this._router.navigate(['/home']);
        }else{
          this.status_book = 'error';
        } 
      },
      error =>{
        console.log(<any>error);
        this.status_book = 'error';
      }
    );
  }

}
