import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators'

//Modelo
import { IBookList } from '../../models/books'

//Servicios
import { BooksManagerServiceService } from '../../services/books-manager-service.service'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Array<IBookList> = [];

  constructor(private bookManagerServiceService: BooksManagerServiceService) {}

  ngOnInit(): void {
    // this.bookList = this.bookManagerServiceService.getBookList();

    this.bookManagerServiceService.bookList$.subscribe(books => {
      this.bookList=books;
    });
    this.observables();
    this.operators();
  }

observables(){
//Observable basic
const observable = new Observable((subscriber) => {
  subscriber.next(100);
  subscriber.next(100);
  subscriber.next(100);
});

observable.subscribe((obs) => console.log(obs));


//Behavior Subject
const beSubject = new BehaviorSubject(0);
beSubject.next(1);
beSubject.next(2);

beSubject.subscribe(value => console.log('A:', value));
beSubject.next(3);


beSubject.subscribe(value => console.log('B:', value));
}

operators() {
  const numbers = from([12, 12, 14]);

  console.log(numbers);
   
  numbers.subscribe((num) => console.log(num));

  //map
  numbers.pipe(map(num => num * num)).subscribe(n => console.log(n));

  //filter
  numbers.pipe(filter(num => num === 14)).subscribe(n => console.log(n));
 } 
}
