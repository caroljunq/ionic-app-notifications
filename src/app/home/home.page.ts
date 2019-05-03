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
  teste = [];

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

  getHoursBetween(notificationInterval){
    let wakeHour = this.wakeHour.split(':');
    let sleepHour = this.sleepHour.split(':');
    let today = new Date();
    let wakeTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(wakeHour[0]), parseInt(wakeHour[1]), 0).getTime()
    let sleepTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(sleepHour[0]), parseInt(sleepHour[1]), 0).getTime()

    // interval in minutes
    let minutesInterval = (sleepTime - wakeTime) / 60000;
    // wake minuts, notifications can be displayed 
    let availableMinutes = 0;
    
    if(minutesInterval < 0){
      availableMinutes  = 1440 - (-minutesInterval);
    }else{
      availableMinutes  = minutesInterval;
    }

    //availableMinutes /interval between each notification
    let numberNotifications = Math.floor(availableMinutes /notificationInterval);
    let hours = [];

    for (let index = 0; index < numberNotifications; index++) {
      let newHour = new Date(wakeTime + notificationInterval * 60000 * (index + 1));
      hours.push([newHour.getHours(),newHour.getMinutes()]);
    }
    return hours;
  }

  //shuffle array
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  async confirmUpdate(){
    const v1 = await this.storage.set('lunch',this.lunchHour);
    const v2 = await this.storage.set('dinner',this.dinnerHour);
    const v3 = await this.storage.set('wake',this.wakeHour);
    const v4 = await this.storage.set('sleep',this.sleepHour);
    const v5 = await this.storage.set('breakHour',this.breakfastHour);
    
    let hours = this.getHoursBetween(90);
    let randomMessages = this.shuffle(this.messages_no_restrictions);
    const settingNotif = await this.setNewNotifications(hours, randomMessages);
    this.presentAlert('Horários foram salvos.');
  }


  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  async setNewNotifications(hours, randomMessages){
    let clearAll = await this.localNotifications.clearAll();
    let notifications = [];

    let arraySize = hours.length < randomMessages.length ? hours.length : randomMessages.length;
    
    for(let i = 0; i < arraySize; i++){
      notifications.push({
        id: i,
        title: 'Dica',
        text: randomMessages[i],
        trigger: { 
          every: { hour: hours[i][0], minute: hours[i][1], second: 1}, count: 365},
      });
    }

    //if there are more available hours than messages
    if(hours.length > randomMessages.length){
      for(let i = arraySize; i < hours.length; i++){
        notifications.push({
          id: i,
          title: 'Dica',
          text: randomMessages[this.getRandomArbitrary(0, randomMessages.length - 1)],
          trigger: { every: { hour: hours[i][0], minute: hours[i][1], second: 1}, count: 365},
        });
      }
    }

    let lunchString = this.lunchHour.split(':');
    let sleepString = this.sleepHour.split(':');
    let today = new Date();
    let lunchDate = new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(lunchString[0]), parseInt(lunchString[1]), 0).getTime() - 30 * 60000)
    let sleepDate = new Date (new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(sleepString[0]), parseInt(sleepString[1]), 0).getTime() - 30 * 60000)

    this.teste = notifications;
    // 30 min before sleep
    notifications.push({
      id: arraySize + 1,
      title: 'Dica',
      text: "Não durma com o queixo apoiado nas mãos.",
      trigger: { every: { hour: sleepDate.getHours(), minute: sleepDate.getMinutes(), second: 1}, count: 365},
    })

    // 30 min before lunch
    notifications.push({
      id: arraySize + 2,
      title: 'Dica',
      text: "Evite alimentos duros na hora das refeições caso esteja com dor.",
      trigger: { every: { hour: lunchDate.getHours(), minute: lunchDate.getMinutes(), second: 1}, count: 365},
    })

    return await this.localNotifications.schedule(notifications);
  }

  async presentAlert(msg){
    let alert = await this.alertCtrl.create({
      message: msg,
      buttons: ['Ok']
    });
    return await alert.present();
  }
}
