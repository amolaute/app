import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RudraRoutingModule } from './rudra-routing.module';
import { RudraComponent } from './rudra.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    RudraComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    RudraRoutingModule,
    ReactiveFormsModule,
    
    
  ]
})
export class RudraModule { }
