import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RudraModule } from './rudra/rudra.module';


const routes: Routes = [
  // { path: '', redirectTo: "app", pathMatch: 'full' },
  { path: '', loadChildren: () => import('./rudra/rudra.module').then(m => RudraModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ 
    anchorScrolling: 'enabled',  // Enable anchor scrolling for fragments
    scrollPositionRestoration: 'enabled',  // Restore scroll position on back/forward navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
