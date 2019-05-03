import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

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

  messages_no_restrictions = ["Evite manter os dentes encostados uns aos outros","Não esfregue os dentes uns aos outros","Evite morder seus lábios",
    "Não roa unhas", "Evite Mascar Chicletes","Evite apoiar a mão no queixo", "Evite Segurar o telefone nas orelhas com o ombro",
    "Evite morder canetas, alfinetes, ou abrir coisas com os dentes", "Não chupe o próprio dedo ou chupeta",
    "Não chupe a própria língua"
  ]
  
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

  // Generate random data (hour minute) out of the range of wake-sleep hour
  getRandomDate() {
    let wakeHour = this.wakeHour.split(':');
    let sleepHour = this.sleepHour.split(':');
    let today = new Date();
    let from = new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(wakeHour[0]), parseInt(wakeHour[1]), 0).getTime() + 1* 60000)
    let to =  new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(sleepHour[0]), parseInt(sleepHour[1]), 0).getTime() - 1* 60000)
    // get time string 23:40:23, then get just the 23:40
    // let randomDate = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime())).toTimeString().split(' ')[0].split(":");
    // return 23:40
    // return randomDate[0] + ':' + randomDate[1];
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  }

  async confirmUpdate(){
    const v1 = await this.storage.set('lunch',this.lunchHour);
    const v2 = await this.storage.set('dinner',this.dinnerHour);
    const v3 = await this.storage.set('wake',this.wakeHour);
    const v4 = await this.storage.set('sleep',this.sleepHour);
    const v5 = await this.storage.set('breakHour',this.breakfastHour);

    //seta novos schedules de notificacao
    const settingNotif = await this.setNewNotifications();
    this.presentAlert('Horários foram salvos.')
  }

  async setNewNotifications(){
    let clearAll = await this.localNotifications.clearAll();
    let notifications = [];
    let count = 0;
   
    let creating = await this.messages_no_restrictions.forEach((message, index) =>{
      count = index + 1;
      let randomDate = this.getRandomDate();
      notifications.push({
        id: index,
        title: 'Dica',
        text: message,
        trigger: { every: { hour: randomDate.getHours(), minute: randomDate.getMinutes(), second: 1}, count: 1},
        // actions: [
        //   { id: 'ok', title: 'OK' },
        // ]
      });  
    });

    let lunchString = this.lunchHour.split(':');
    let sleepString = this.sleepHour.split(':');
    let today = new Date();
    let lunchDate = new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(lunchString[0]), parseInt(lunchString[1]), 0).getTime() - 30 * 60000)
    let sleepDate = new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(sleepString[0]), parseInt(sleepString[1]), 0).getTime() - 30 * 60000)

    // 30 min before sleep
    notifications.push({
      id: count++,
      title: 'Dica',
      text: "Não durma com o queixo apoiado nas mãos.",
      trigger: { every: { hour: sleepDate.getHours(), minute: sleepDate.getMinutes(), second: 1}, count: 1},
      // actions: [
      //   { id: 'ok', title: 'OK' },
      // ]
    })

    // 30 min before lunch
    notifications.push({
      id: count++,
      title: 'Dica',
      text: "Evite alimentos duros na hora das refeições caso esteja com dor.",
      trigger: { every: { hour: lunchDate.getHours(), minute: lunchDate.getMinutes(), second: 1}, count: 1},
      // actions: [
      //   { id: 'ok', title: 'OK' },
      // ]
    })

    return await this.localNotifications.schedule(notifications);
  }

  async presentAlert(msg){
    let alert = await this.alertCtrl.create({
      // header: 'Atualização',
      message: msg,
      buttons: ['Ok']
    });
    return await alert.present();
  }
}
