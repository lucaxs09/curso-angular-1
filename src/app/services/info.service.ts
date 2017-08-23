import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

@Injectable()
export class InfoService {
  info:any = {};
  equipo:any = [];

  private cargada:boolean = false;
  private about_data_loaded:boolean = false;


  constructor(public http:Http) {
    this.cargarAppInfo();
    this.cargarInfoAbout();

  }



  private cargarAppInfo(){

    this.http.get("assets/data/info.pagina.json")
      .subscribe(data => {

        this.cargada = true;
        this.info = data.json();
      })
  }
  private cargarInfoAbout(){
    this.http.get("https://cursoangular-portafolio.firebaseio.com/equipo.json")
      .subscribe(data => {
        //console.log(data.json());
        this.about_data_loaded = true;
        this.equipo = data.json();
      })

  }


}
