import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo.model';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css'],
  providers: [ArticuloService]
})
export class FormularioArticuloComponent implements OnInit {
  articulo: Articulo = {
    codigo: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    stock: 0
  };

  constructor(
    private _articuloService: ArticuloService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id !== null) {
      this._articuloService.obtenerArticulo(parseInt(id)).subscribe(articulo => {
        this.articulo = articulo;
      });
    }
  }

  guardarArticulo(): void {
    if (this.articulo.id) {
      this._articuloService.actualizarArticulo(this.articulo.id, this.articulo).subscribe(() => {
        this._router.navigate(["/articulos"]);
      });
    } else {
      this._articuloService.agregarArticulo(this.articulo).subscribe(articulo => {
        this._router.navigate(["/articulos"]);
      });
    }
  }
}
