import { Component, OnInit } from '@angular/core';
import { BooksManagerServiceService } from '../../services/books-manager-service.service';
import { Router } from '@angular/router';
import { IBookList } from '../../models/books';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
name:string;
author:string;
imageUrl:string;
description:string;


  constructor(
    private bookManagerServiceService: BooksManagerServiceService, 
    private router: Router
    ) { }


  ngOnInit(): void { }

  onSubmit(){
    const newBook:IBookList = {
      author:this.author,
      name:this.name,
      imageUrl:this.imageUrl,
      description:this.description,
    };
  

    this.bookManagerServiceService.addNewBook(newBook);
    this.router.navigate(['']);
 }
}
