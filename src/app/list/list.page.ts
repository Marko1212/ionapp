
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: any[] = [];

  skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  page = 1;

  constructor(private userService: UserService, private router: Router) { }

  ionViewWillEnter() {

    this.users = [];
    //on reset la liste à liste vide à chaque fois qu'on arrive
    //sur la page

 /*    this.http.get(`https://randomuser.me/api/?results=100`)
    .pipe(
      map(response => response['results'])
    )
    .subscribe(users => this.items = users);
    */

    this.userService.getUsers(this.page).then(users => 
      {
        console.log(users);

        //le setTimeout va nous permettre de tester le skeleton
        setTimeout(() => this.users = users['results'], 5000); //ou users.results
        
      });


  }

  ngOnInit() {
  
  }

  openUser(user) {

    console.log(user);
    this.router.navigate(['/user-detail'], {state : {keyUser: user}});

  }

  loadData(event) {
    console.log(event);
    this.page++; //page 2 si on est sur la page 1
    this.userService.getUsers(this.page).then(users => {
        console.log(users);
        //opérateur spread de ES6 pour concaténer 2 tableaux
        this.users = [...this.users, ...users['results']];
        //il faut arrêter l'événement quand les 20 users ont été chargés
        //sinon Ionic 'croit' que le chargement est toujours en cours et
        // on est bloqué, de nouveaux users ne sont pas chargés
        //très important de faire event.target.complete()
        event.target.complete();
        if (this.page === 5) {
          event.target.disabled = true;
        }
    });

  }
}