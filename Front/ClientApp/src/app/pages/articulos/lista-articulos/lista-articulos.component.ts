import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo.model';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
  providers: [ArticuloService]
})
export class ListaArticulosComponent implements OnInit {
  articulos: Articulo[] = [];
  articuloSeleccionado: Articulo = {
    codigo: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    stock: 0
  };

  constructor(private _articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  obtenerArticulos(): void {
    this._articuloService.obtenerArticulos().subscribe(articulos => {
      this.articulos = articulos;
    });
  }

  seleccionarArticulo(articulo: Articulo): void {
    this.articuloSeleccionado = articulo;
  }

  eliminarArticulo(id: number): void {
    this._articuloService.eliminarArticulo(id).subscribe(() => {
      this.articulos = this.articulos.filter(articulo => articulo.id !== id);
    });
  }
}
