import { Book } from './../book.model';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookTitles: Book[] = [];
  bookTitle2 = 'Wpisz tytuł';
  bookAuthor = 'Wpisz autora';
  bookDate = 'Data wydania';
  bookPages = 0;
  chosenTitle2: any = 'Tytuł Srytuł';





  constructor(public userService: UserServiceService) { }


  ngOnInit(): void {
    /*
      const book1 = new Book();
      book1.title = "test";
      book1.author = "1";
      ..
      cosnt book2 = new Book();
      --------------------
      const book1 = new Book() { title = "test", author = "1" , ...};
      const book2 = new Book() { title = "aaa", ...};
      this.bookTitles.push(book1);
      --------------------
      this.bookTitles = [
        new Book() { title = "test", ...},
        new Book() { title = "1", ...}
      ]
    */

    this.bookTitles = [
      {title: "Drrr!!", author: "Ryohgo Narita", date: new Date("18-06-2009"), pages: 322 },
      {title: "To (nie) koniec świata", author: "Grupa Darwin", date: new Date("02-05-2019"), pages: 410 },
      {title: "Gramatyka japońska", author: "Romuald Huszcza", date: new Date("26-01-2000"), pages: 322 },
      {title: "Filozofia japońska", author: "H. Gene Blocker", date: new Date("12-03-2010"), pages: 521 },
      {title: "Ziemia Obiecana", author: "Barack Obama", date: new Date("30-01-2021"), pages: 850 },
    ];
  }

  addedTitle(bookTitle: Book){
    this.bookTitles.push(bookTitle);
  }


  showDetails(bookTitle: Book){
    this.chosenTitle2 = bookTitle.title;
  }

  remove(bookTitle: Book){
    this.bookTitles = this.bookTitles.filter(e => e !== bookTitle);
  }

}
