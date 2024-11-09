
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Para usar  y manejar mejor los datos
import { Observable } from 'rxjs';




@Injectable({

  providedIn: 'root'

})

export class ProductosService {

  //Ruta del backend
  private apiUrl = 'http://localhost:3000/productos'; 

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);

  }

}
