
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { map } from 'rxjs/operators';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private nav: NavController) { }

  ionViewWillEnter() {

 /*    this.http.get(`https://randomuser.me/api/?results=100`)
    .pipe(
      map(response => response['results'])
    )
    .subscribe(users => this.items = users);
    */

    this.userService.getUsers().then(users => 
      {
        console.log(users);
        this.users = users['results']; //ou users.results
        
      });
  }

  ngOnInit() {
  
  }

  openUser() {

  }
}