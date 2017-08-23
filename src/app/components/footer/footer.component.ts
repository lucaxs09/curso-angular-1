import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  public anio:number = new Date().getFullYear();


  constructor(public _is:InfoService){

  }

}
