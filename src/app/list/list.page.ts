
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ionViewWillEnter() {
    this.http.get(`https://randomuser.me/api/?results=100`)
      .pipe(
        map(response => response['results'])
      )
      .subscribe(users => this.items = users);
  }

  ngOnInit() {

  }
}