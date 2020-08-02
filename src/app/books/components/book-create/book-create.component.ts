import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { BooksManagerService } from '../../services/books-manager.service'

//Models
import { IBook } from '../../models/book.interface'

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  name: string
  author: string
  imageUrl: string

  constructor(
    private BooksManagerService : BooksManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newIndex = this.BooksManagerService.getBooks().length
    const newBook : IBook = {
      name: this.name,
      author: this.author,
      imageUrl: this.imageUrl,
      id: newIndex
    }
    this.BooksManagerService.addNewBook(newBook)
    this.router.navigate([''])
    // console.log(this.BooksManagerService.getBooks())
  }

}
