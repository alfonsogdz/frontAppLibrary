import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {routing, appRoutingProviders } from './app.routing';


//componente
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//import { from } from 'rxjs/observable/from';
import { DefaultComponent } from './components/default/default.component';
import { BookNewComponent } from './components/book-new/book-new.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    BookNewComponent,
    BookEditComponent,
    BookDetailComponent,
    CatalogComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
