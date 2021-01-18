import { Component } from '@angular/core';
import {trigger, transition, useAnimation, state, style} from "@angular/animations";
import {rotateCubeToTop} from "ngx-router-animations";
import { NgxSpinnerService } from "ngx-spinner";
import { fadeOut, slideOutLeft, slideOutRight, slideOutUp } from 'ng-animate';

import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateCubeToTop', [ transition('* => *', useAnimation(rotateCubeToTop,{
      params: {enterTiming: '1', leaveTiming: '1', enterDelay: '0.2', leaveDelay: '0.2'}, 
      }
    ))]),
    trigger("fadeOutContainer", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(fadeOut, { params: { timing: 0.5, delay: 0 } }) )
    ]),
    trigger("slideOutBackgroundLeft", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutLeft, { params: { timing: 1.5, delay: 0 } }) )
    ]),
    trigger("slideOutBackgroundRight", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutRight, { params: { timing: 1.5, delay: 0 } }) )
    ]),
    trigger("slideOutLeafRightTop", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutRight, { params: { delay: 0.1 } }) )
    ]),
    trigger("slideOutLeafRightBottom", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutRight, { params: { timing: 0.5, delay: 0 } }) )
    ]),
    trigger("slideOutLeafLeftBottom", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutLeft, { params: { delay: 0.3 } }) )
    ]),
    trigger("slideOutLeafLeftTop", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutLeft, { params: { timing: 0.5, delay: 0 } }) )
    ]),
    trigger("slideOutLeafTop", [
      state( "true", style({ opacity: 0 })), 
      transition("false => true", useAnimation(slideOutUp, { params: { timing: 1.5, delay: 0 } }) )
    ])
  ]
})
export class AppComponent {

  title = 'asian';

  fadeOutContainer = false;
  slideOutBackgroundLeft = false;
  slideOutBackgroundRight = false;
  slideOutLeafRightTop = false;
  slideOutLeafRightBottom = false;
  slideOutLeafLeftBottom = false;
  slideOutLeafLeftTop = false;
  slideOutLeafTop = false;

  public showOverlay = true;

  getState(outlet)  {
		return outlet.activatedRouteData.state;
  }

  constructor(private router: Router,  private spinner: NgxSpinnerService) {
  }

  ngOnInit(){
    this.spinner.show();    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.backTop();
      this.startAnimation();
    }, 3000);
  }

  backTop(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    });
  }

  startAnimation(){

    this.fadeOutContainer = !this.fadeOutContainer;
    this.slideOutBackgroundLeft = !this.slideOutBackgroundLeft;
    this.slideOutBackgroundRight = !this.slideOutBackgroundRight;
    this.slideOutLeafRightTop = !this.slideOutLeafRightTop;
    this.slideOutLeafRightBottom = !this.slideOutLeafRightBottom;
    this.slideOutLeafLeftBottom = !this.slideOutLeafLeftBottom;
    this.slideOutLeafLeftTop = !this.slideOutLeafLeftTop;
    this.slideOutLeafTop = !this.slideOutLeafTop;

    setTimeout(() => {
      this.showOverlay = false;
    }, 1700);
  }
  
}
