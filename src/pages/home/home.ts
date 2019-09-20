import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let args = { value: "Hello" };
    Plugins.Concatenate.echo(args).then(result => {
      console.log("Concatenate.echo() result: ", result);
    }, error => {
      console.log("Concatenate.echo() error: ", error);
    });

  }

}
