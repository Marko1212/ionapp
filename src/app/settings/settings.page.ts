import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  settings = {username: '', city: '', darkMode: false};

  saving = false;

  success = false;

  constructor(private storage: Storage) { }

  ngOnInit() {

    this.storage.get("settings").then(settings => {
      if (settings!==null) {
      this.settings = settings;
      }
  });

}

  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  save(){
    console.log(this.settings);
    //on va utiliser le service storage pour stocker 
    //les settings sur le téléphone

    this.saving = true;

    this.storage.set("settings", this.settings).then(() => {
      setTimeout(() => this.saving = false, 2000);
      setTimeout(() => this.success = true, 2000);
      setTimeout(() => this.success = false, 10000);
    });
  }

  removeData(){
  
    this.storage.remove("settings");
    
    this.settings = {username: '', city: '', darkMode: false};

  }

}
