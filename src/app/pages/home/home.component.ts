import { AfterViewInit, Component, OnInit} from "@angular/core";
import * as restartCounter from "../../../assets/js/counter.js";
import * as AOS from 'aos';

declare var restartCounter: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
    restartCounter();
    AOS.init({
      mirror: true,
      duration: 2500, // values from 0 to 3000, with step 50ms
    });  
  }

}