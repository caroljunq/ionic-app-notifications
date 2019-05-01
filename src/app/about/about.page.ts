import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  firstAccess = false;
  accessProgress: number = 0;

  constructor(private storage: Storage, private router: Router) {
    this.storage.get('firstAccess').then((val) => {
      if(val == null || val){
        this.firstAccess = true;
      }else{
        this.firstAccess = false;
      }
    });
  }

  forwardAccessProgress(){
    this.accessProgress += 1;
  }

  backAccessProgress(){
    this.accessProgress -= 1;
  }

  startApp(){
    this.storage.set('firstAccess', false);
    this.router.navigateByUrl('/home');
  }

  ngOnInit(){}

}
