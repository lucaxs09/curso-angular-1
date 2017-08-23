import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent,PortafolioComponent,PortafolioItemComponent} from "./components/index.paginas";

const routes: Routes = [
  {path: '', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'producto', component: PortafolioItemComponent},
  {path: '**', pathMatch:'full', redirectTo:''},
];


export const app_routing = RouterModule.forRoot(routes,{useHash:true});
