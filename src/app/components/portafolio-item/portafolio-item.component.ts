import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isNullOrUndefined, log} from "util";
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent implements OnInit {

  public cargando:boolean = true;

  public producto:any = undefined;
  public producto_id:string;

  constructor(private route:ActivatedRoute, private _ps:ProductosService) {
    route.params.subscribe(parametros =>{
      this.producto_id = parametros['id'];
      _ps.cargar_producto(parametros['id'])
        .subscribe(res =>{

          this.producto = res.json();

          this.cargando = false;

        })
    })
  }

  ngOnInit() {
  }

}
