import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { ContactComponent } from './contact.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FlexLayoutModule,
    NgxSpinnerModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
