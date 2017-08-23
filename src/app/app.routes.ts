import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent,PortafolioComponent,PortafolioItemComponent,SearchComponent} from "./components/index.paginas";


const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'producto/:id', component: PortafolioItemComponent},
  {path:'buscar/:termino',component:SearchComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}

];


export const app_routing = RouterModule.forRoot(routes,{useHash:true});
