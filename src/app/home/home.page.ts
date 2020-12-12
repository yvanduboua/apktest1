import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public conctact = {
    nom: "Duboua",
    prenom: "Yvan",
    number: "12345",
    lojo: "assets/imae/lojo.PNG"
  }

  constructor() {}

}
