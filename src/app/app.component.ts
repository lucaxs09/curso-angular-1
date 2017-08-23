import { Component } from '@angular/core';
import {InfoService} from "./services/info.service";
import {ProductosService} from "./services/productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoApp:InfoService, public ps:ProductosService){

  }
}
