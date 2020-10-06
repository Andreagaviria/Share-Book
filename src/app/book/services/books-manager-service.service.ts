import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'


//Model
import { IBookList } from '../models/books'


@Injectable({
  providedIn: 'root'
})
export class BooksManagerServiceService {
bookList$ = new BehaviorSubject<IBookList[]>([]);

  constructor(private firestore: AngularFirestore) { 
  firestore
  .collection('books')
  .valueChanges()
  .subscribe((books:Array<IBookList>) => {
    this.bookList$.next(books);
  })
}

  getBookList() {
    return this.bookList$.getValue();
  }

  addNewBook(newBook:IBookList) {
    this.bookList$.next([...this.bookList$.getValue(), newBook]);
  }
}
