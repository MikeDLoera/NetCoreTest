import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo.model';
import { Inventario } from 'src/app/models/inventario.model';
import { Tienda } from 'src/app/models/tienda.model';
import { ArticuloService } from 'src/app/services/articulo.service';
import { InventarioService } from 'src/app/services/inventario.service';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css'],
  providers: [InventarioService, TiendaService, ArticuloService]
})
export class FormularioInventarioComponent implements OnInit {
  inventario: Inventario = {
    articuloID: 0,
    tiendaID: 0,
    fecha: ''
  };

  articulos: Articulo[];
  tiendas: Tienda[]

  constructor(
    private _inventarioService: InventarioService,
    private _tiendaService: TiendaService,
    private _articuloService: ArticuloService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id !== null) {
      this._inventarioService.obtenerInventario(parseInt(id)).subscribe(inventario => {
        this.inventario = inventario;
        this.inventario.fecha = this.inventario.fecha.substring(0, 10);
      });
    }

    this._articuloService.obtenerArticulos().subscribe(articulos => {
      this.articulos = articulos;
    });

    this._tiendaService.obtenerTiendas().subscribe(tiendas => {
      this.tiendas = tiendas;
    });
  }

  guardarInventario(): void {
    this.inventario.articulo = undefined;
    this.inventario.tienda = undefined;
    this.inventario.articuloID = parseInt(this.inventario.articuloID + "");
    this.inventario.tiendaID = parseInt(this.inventario.tiendaID + "");

    if (this.inventario.id) {
      this._inventarioService.actualizarInventario(this.inventario.id, this.inventario).subscribe(() => {
        this._router.navigate(["/inventarios"]);
      });
    } else {
      this._inventarioService.agregarInventario(this.inventario).subscribe(inventario => {
        this._router.navigate(["/inventarios"]);
      });
    }
  }
}
