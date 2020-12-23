import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {MeteoService} from './../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  settings = {username: '', city: '', darkMode: false};
  meteo = null;

  constructor(
    private router: Router,
    private storage: Storage,
    private meteoService: MeteoService
  ) {}

  ngOnInit() {
  
  }


  ionViewWillEnter() {

    this.storage.get('settings').then(settings => {

      if ((settings === null) || !settings.city) {  
      
      this.settings.city = 'Paris';

      } else {

      this.settings = settings;

      }
      
      this.meteoService.getMeteo(this.settings).then(meteo => 
      {
        console.log(meteo);
        this.meteo = meteo;
       // console.log(this.meteo);
        
      });
    


  });

}



}



