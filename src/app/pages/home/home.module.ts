import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FlexLayoutModule,
    NgxSpinnerModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
