import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {

  creators = [{avatar: "assets/icon/happy-outline.svg", name: "Marko" }, {avatar: "assets/icon/refresh-circle.svg", name: "Olga"}];

  constructor() { }

  ngOnInit() {
  }

}
