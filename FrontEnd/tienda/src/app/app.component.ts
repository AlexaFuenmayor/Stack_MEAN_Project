import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda';
  productos: any[]=[];

  constructor(private productoService: ProductosService){}

    //permitirá iniciar ciertos modulos:
    ngOnInit(): void{
      this.cargarProductos();

  }

  cargarProductos():void{

   //get proviene del servicio. Acá se inicializa el servicio 
    this.productoService.getProductos().subscribe(data=>{
      this.productos = data;
    });
  }
}
