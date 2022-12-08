import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { BookNewComponent } from './components/book-new/book-new.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';

const appRoutes: Routes = [
    {path:'', component: CatalogComponent },
    {path:'inicio', component: DefaultComponent},
    {path:'catalogo', component: CatalogComponent},
    {path:'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path:'registro', component: RegisterComponent},
    {path: 'crear-libro', component: BookNewComponent},
    {path: 'editar-libro/:id', component: BookEditComponent},
    {path: 'libro/:id', component: BookDetailComponent},
    {path: 'stock', component: DefaultComponent},
    {path:'**', component: CatalogComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
