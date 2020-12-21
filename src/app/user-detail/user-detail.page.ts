import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  user : any = {};
  //si on met juste : user; là c'est comme si on écrivait : user = null; mieux vaut éviter celà
  // on type user avec any
  //on initialise l'objet user comme un objet vide

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation().extras.state.keyUser);

    this.user = this.router.getCurrentNavigation().extras.state.keyUser;

  }

}
