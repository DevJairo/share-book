import { Component, OnInit } from '@angular/core';

// Models
import { IBook } from '../../models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];

  constructor() {
    const newBook: IBook = {
      name: 'Brújula...',
      author: 'Diana Uribe',
      imageUrl:
        'https://www.wowebook.org/wp-content/uploads/2020/01/Clean-Code-in-JavaScript.webp',
    };
    this.addNewBook(newBook);
    this.addNewBook(newBook);
    this.addNewBook(newBook);
    this.addNewBook(newBook);
  }

  ngOnInit(): void {}

  addNewBook(book: IBook) {
    this.bookList = [...this.bookList, book];
    console.log(this.bookList);
  }
}
