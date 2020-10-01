import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Model
import { IBookList } from '../models/books'


@Injectable({
  providedIn: 'root'
})
export class BooksManagerServiceService {
bookList = new BehaviorSubject<IBookList[]>([]);

  constructor() { }

  getBookList() {
    return this.bookList.getValue();
  }

  addNewBook(newBook:IBookList) {
    this.bookList.next([...this.bookList.getValue(), newBook]);
  }
}
