import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ProductosService {
  public productos:any[] = [];
  public cargando:boolean = true;


  constructor(public http:Http) {
    this.cargarProductos();
  }


  public cargarProductos(){

    this.cargando = true;
    if(this.productos.length === 0){
      this.http.get("https://cursoangular-portafolio.firebaseio.com/productos_idx.json")
        .subscribe(res => {
          console.log(res.json());
          this.cargando = false;
        })


    }
  }
}
