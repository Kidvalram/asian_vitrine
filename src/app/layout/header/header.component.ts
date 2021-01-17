import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, state, useAnimation, style, animate } from '@angular/animations';
import { fadeIn, pulse, flipInX, flipInY } from 'ng-animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, { params: { timing: 1.5, delay: 0 } }))]),
    trigger('flipInX', [transition('* => *', useAnimation(flipInX, { params: { timing: 2.5, delay: 0 } }))]),
    trigger('flipInY', [transition('* => *', useAnimation(flipInY, { params: { timing: 2.5, delay: 0 } }))]),
    trigger('pulse', [transition('* => *', useAnimation(pulse, { params: { timing: 2.5, delay: 0 } }))]),
  ]
})
export class HeaderComponent implements OnInit {

  fadeIn = false;
  flipInX = false;
  flipInY = false;
  pulse = false;

  accueilActiveIcon = "assets/images/layout/header/home_mobile_icon_active.png";
  accueilIcon = "assets/images/layout/header/home_mobile_icon.png";
  sommesActiveIcon = "assets/images/layout/header/us_mobile_icon_active.png";
  sommesIcon = "assets/images/layout/header/us_mobile_icon.png";
  contactActiveIcon = "assets/images/layout/header/phone_mobile_icon_active.png";
  contactIcon = "assets/images/layout/header/phone_mobile_icon_2.png";
  carteActiveIcon = "assets/images/layout/header/card_mobile_icon_active.png";
  carteIcon = "assets/images/layout/header/card_mobile_icon.png";
  
  constructor() {
    this.loadDynmicallyScript();
  } 

  ngOnInit(): void {
   
  }

  public loadDynmicallyScript() {
    var script = document.createElement('script');
    script.src = "assets/js/webflow.js";
    script.async =false;
    document.head.appendChild(script);
  }

  onAnimationEvent() {
    this.fadeIn = !this.fadeIn;
    this.flipInX = !this.flipInX;
    this.flipInY = !this.flipInY;  
    this.pulse = !this.pulse;
  }

}
