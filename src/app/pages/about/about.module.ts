import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FlexLayoutModule
  ],  
  declarations: [AboutComponent]
})
export class AboutModule { }
