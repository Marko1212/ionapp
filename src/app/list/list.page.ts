
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  items: any[] = [];

  constructor(private userService: UserService) { }

  ionViewWillEnter() {

 /*    this.http.get(`https://randomuser.me/api/?results=100`)
    .pipe(
      map(response => response['results'])
    )
    .subscribe(users => this.items = users);
    */

    this.userService.getUsers().then(users => this.items = users['results']);
  }

  ngOnInit() {
  
  }
}