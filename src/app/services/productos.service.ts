import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ProductosService {
  public productos:any[] = [];
  public productos_filtrado:any[] = [];

  public cargando:boolean = true;
  public st:number = 0;

  private promesa:any;

  constructor(public http:Http) {
    this.cargarProductos();
  }


  public cargarProductos(){

    this.cargando = true;
    this.st = 1;//Estado descargando..

    //console.log("Cargando productos...");

    this.promesa = new Promise((resolve, reject) => {

      if(this.productos.length === 0){
        this.http.get("https://cursoangular-portafolio.firebaseio.com/productos_idx.json")
          .subscribe(res => {

            this.productos = res.json();
            this.cargando = false;
            this.st = 2;//estado descargado
            //console.log("Productos Cargados");
            resolve();
          })


      }


    });
    return this.promesa;


  }

  public cargar_producto(id:string){
    //
    return this.http.get(`https://cursoangular-portafolio.firebaseio.com/productos/${id}.json`)
  }

  public buscar_producto(termino:string){
    //console.log("Buscando productos...");

    //verificamos si ya se cargaron los productos
    if(this.st === 0){
      //aun no se han cargado
      //Inciamos la carga de productos
      //console.log("Los productos aún no se han cargado. Cargando...");
      this.cargarProductos().then(() => {
        //terminó de descargar
        this.filtrar_productos(termino);
      })

    }else if(this.st === 1){
        //se estan descargando... esperamos
      //console.log("Los productos se están cargando. Esperando...");
        this.promesa.then(() => {
          this.filtrar_productos(termino);
        });

    }else {
      //ya estan cargados
      this.filtrar_productos(termino);
    }



  }

  private filtrar_productos(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      //console.log(prod);

      if(
        prod.categoria.indexOf(termino) >= 0
        || prod.titulo.toLowerCase().indexOf(termino) >= 0
      ){
        this.productos_filtrado.push(prod);
      }

    })
  }
}
