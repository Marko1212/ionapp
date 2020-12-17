import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  user = {pseudo: '', ville: '', darkmode: true};

  constructor() { }

  ngOnInit() {
  }

  logForm(){
    console.log(this.user);
  }

}
