import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  settings = {username: '', city: '', darkMode: false};

  constructor(private storage: Storage) { }

  ngOnInit() {
   
    this.storage.get("settings").then(settings => this.settings = settings);
   
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  save(){
    console.log(this.settings);
    //on va utiliser le service storage pour stocker 
    //les settings sur le téléphone


    this.storage.set("settings", this.settings);
  }

  removeData(){
  
    this.storage.remove("settings");
    
    this.settings = {username: '', city: '', darkMode: false};

  }

}
