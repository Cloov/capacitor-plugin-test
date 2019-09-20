import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    let args = { left: "Exce", right: "llent" };

    Plugins.Concatenate.concat(args).then(result => {
      console.log("Concatenated string: " + result);
    });

  }

}
