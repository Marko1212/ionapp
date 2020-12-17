import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {

  creators = [{avatar: "assets/creator/happy-outline.svg", job: "développeur", name: "Marko" }, {avatar: "assets/creator/refresh-circle.svg", job: "professeur", name: "Olga"},
  {avatar: "assets/creator/darth-vader.jpg", job: "Mère", name: "Andjelija" }];

  constructor() { }

  ngOnInit() {
  }

}
