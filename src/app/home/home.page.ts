import { Component } from '@angular/core';
import {Camera} from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = [];

  constructor(private camera: Camera,
              private alert: AlertController) {}

  takePicture() {
    let options = {
      destinationType: this.camera.DestinationType.DATA_URL
    };
    this.camera.getPicture(options).then(image => {
      //on récupère la photo dans l'image
      this.images.push('data:image/png;base64,' + image);
      this.alert.create({
        message: 'Salut ' + image
      }).then(alert => alert.present());
    });
  }

}
