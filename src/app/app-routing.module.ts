import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookCreateComponent } from './books/components/book-create/book-create.component';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }, // home, errorPage
  // loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}