import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AboutRoutingModule } from './about-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FlexLayoutModule,
    NgxSpinnerModule
  ],  
  declarations: [AboutComponent]
})
export class AboutModule { }
