import { RudraComponent } from './rudra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: RudraComponent,
  //   // children: [
  //   //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   //   { path: 'home', component: HomeComponent, title: 'Home' },
  //   //   { path: 'about', component: AboutComponent, title: 'About' },
  //   //   { path: 'service', component: ServiceComponent, title: 'Service' },
  //   //   { path: 'contact-us', component: ContactComponent, title: 'Contact Us' }
  //   // ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [RouterModule]
})
export class RudraRoutingModule { }
