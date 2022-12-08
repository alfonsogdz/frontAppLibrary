import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Book } from '../models/book';

@Injectable()
export class BookService {
    public url: string;


    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    pruebas() {
        return "Hola mundo";
    }

    create(token, book: Book): Observable<any> {
        let json = JSON.stringify(book);
        let params = "json=" + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.post(this.url + 'books', params, { headers: headers });

    }
    getBooks(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'books', {headers: headers});
    }
    getBook(id): Observable<any>{
        return this._http.get(this.url + 'books/'+ id);
    }
    update(token, book, id): Observable<any>{
        let json = JSON.stringify(book);
        let params = "json="+json;


        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        
            return this._http.put(this.url+ 'books/'+ id , params, {headers: headers});
    }
    delete(token, id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

            return this._http.delete(this.url + 'books/' + id, {headers: headers});

    }

}    