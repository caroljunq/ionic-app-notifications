import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lunchHour: any = "00:00";
  dinnerHour: any = "00:00";
  wakeHour: any = "00:00";
  sleepHour: any = "00:00";
  breakfastHour: any = "00:00";


  constructor(private storage: Storage, private router: Router, private alertCtrl: AlertController) {
    this.storage.get('firstAccess').then((firstAccess) => {
      if(firstAccess == null || firstAccess){
        this.router.navigateByUrl('/about');
        this.storage.set('firstAccess',true)
      }
    });
    this.storage.get('lunch').then((lunch) => {
      if(lunch){
        this.lunchHour = lunch;
      }
    });

    this.storage.get('dinner').then((dinner) => {
      if(dinner){
        this.dinnerHour = dinner;
      }
    });

    this.storage.get('wake').then((wake) => {
      if(wake){
        this.wakeHour = wake;
      }
    });

    this.storage.get('sleep').then((sleep) => {
      if(sleep){
        this.sleepHour = sleep;
      }
    });

    this.storage.get('breakHour').then((breakHour) => {
      if(breakHour){
        this.breakfastHour = breakHour;
      }
    });
  }

  confirmUpdate(){
    this.storage.set('lunch',this.lunchHour);
    this.storage.set('dinner',this.dinnerHour);
    this.storage.set('wake',this.wakeHour);
    this.storage.set('sleep',this.sleepHour);
    this.storage.set('breakHour',this.breakfastHour);
    this.presentAlert();
  }

  async presentAlert(){
    let alert = await this.alertCtrl.create({
      header: 'Atualização.',
      message: 'Horários foram salvos.',
      buttons: ['Ok']
    });
  return await alert.present();
  }
}
