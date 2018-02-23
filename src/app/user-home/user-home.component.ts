import { Component, OnInit } from '@angular/core';
import { MyServiceService, User } from '../my-service.service';
import { Book } from '../book';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  show: boolean = true;
  book: Book[] = [];
  d: any;
  
  constructor(private _service: MyServiceService) { }

  ngOnInit() {
    this.showBooks();
  }

  showBooks() {
    this._service.getBooks()
      .subscribe(
      data => {
        this.d = data;

        for (var i = 0; i < this.d.length; i++) {

          this.book[i] = this.d[i];
          console.log(this.book[i]);
        }
      },
      err => { console.log(err); }
      );


  }

}
