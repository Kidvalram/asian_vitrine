import { AfterViewInit, Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import * as restartCounter from "../../../assets/js/counter.js";
import * as AOS from 'aos';

declare var restartCounter: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public showOverlay = true;

  @ViewChild('toTop')
  toTop!: ElementRef;

  constructor(private router: Router, private spinner: NgxSpinnerService) { 
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  } 

  ngOnInit(): void {
    restartCounter();
    this.spinner.show();
    AOS.init({
      mirror: true,
      duration: 2500, // values from 0 to 3000, with step 50ms
    });  
  }

  onTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
      this.disableScrolling();
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
      this.enableScrolling();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
      this.enableScrolling();

    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
      this.enableScrolling();
    }
  }

  disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableScrolling(){
    window.onscroll=function(){};
  }


}