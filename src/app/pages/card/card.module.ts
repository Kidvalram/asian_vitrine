import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [ CardComponent ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FlexLayoutModule
  ]
})
export class CardModule { }
