import { Component } from '@angular/core';
import {trigger, transition, useAnimation} from "@angular/animations";
import {rotateCubeToTop} from "ngx-router-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateCubeToTop', [ transition('* => *', useAnimation(rotateCubeToTop,{
      params: {enterTiming: '1', leaveTiming: '1', enterDelay: '0.2', leaveDelay: '0.2'}
      }
    ))])
  ]
})
export class AppComponent {
  title = 'asian';
  getState(outlet)  {
		return outlet.activatedRouteData.state;
  }

  constructor() {}

  ngOnInit(){
  }
}
