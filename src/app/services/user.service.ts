import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:  HttpClient) { }
/* 
  getUsers() {
    //on transforme l'Observable en Promise, parce que par défaut
    //la méthode retourne un Observable
    //Site web : https://randomuser.me/
    //l'API correspondante : https://randomuser.me/api/
    return this.http.get(`https://randomuser.me/api/?results=100`).toPromise();
  } */

  getUsers(page: number = 1) {
    //on transforme l'Observable en Promise, parce que par défaut
    //la méthode retourne un Observable
    //Site web : https://randomuser.me/
    //l'API correspondante : https://randomuser.me/api/
    return this.http.get('https://randomuser.me/api/?results=20&page='+page+'&seed=m2i').toPromise();
  }

 
}


