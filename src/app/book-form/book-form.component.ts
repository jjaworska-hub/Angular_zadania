import { Book } from './../book.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Input()
  inputTextTitle: string = '';
  @Input()
  inputAuthor: string = '';
  @Input()
  inputDate: any = '';
  @Input()
  inputPages: number = 0;


  @Output()
  eventTitle = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }


  addTitle(){
    const addedBook = new Book();
    addedBook.title = this.inputTextTitle;
    addedBook.author = this.inputAuthor;
    addedBook.date = this.inputDate;
    addedBook.pages = this.inputPages;
    this.eventTitle.emit(addedBook)
    // const addedBook = { title: this.inputTextTitle ....}
  }



}
