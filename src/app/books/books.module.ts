import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookCreateComponent, BookListComponent],
  imports: [CommonModule, SharedModule],
  exports: [BookCreateComponent, BookListComponent],
})
export class BooksModule {}
