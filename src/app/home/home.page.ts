import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

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


  constructor(
    private storage: Storage,
    private router: Router,
    private alertCtrl: AlertController,
    private localNotifications: LocalNotifications
  ) {
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

  getRandomDate() {
    let wakeHour = this.wakeHour.split(':');
    let sleepHour = this.sleepHour.split(':');
    let today = new Date();
    var from = new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(wakeHour[0]), parseInt(wakeHour[1]), 0).getTime() + 1* 60000)
    var to =  new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(sleepHour[0]), parseInt(sleepHour[1]), 0).getTime() - 1* 60000)
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  }

  confirmUpdate(){
    this.storage.set('lunch',this.lunchHour);
    this.storage.set('dinner',this.dinnerHour);
    this.storage.set('wake',this.wakeHour);
    this.storage.set('sleep',this.sleepHour);
    this.storage.set('breakHour',this.breakfastHour);

    //seta novos schedules de notificacao
    // this.setNewNotifications();
    // this.presentAlert();
    console.log(this.getRandomDate());
  }

  async setNewNotifications(){

    await this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret: key }
    });
    // return await this.localNotifications.clearAll();
    // clearAll
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
