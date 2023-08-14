import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CompraService } from 'src/app/services/compra.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Articulo } from 'src/app/models/articulo.model';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css'],
  providers: [CompraService, ClienteService, ArticuloService]
})
export class FormularioCompraComponent implements OnInit {
  compra: Compra = {
    articuloID: 0,
    clienteID: 0,
    fecha: ''
  };

  clientes: Cliente[];
  articulos: Articulo[];

  constructor(
    private _compraService: CompraService,
    private _clienteService: ClienteService,
    private _articuloService: ArticuloService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id !== null) {
      this._compraService.obtenerCompra(parseInt(id)).subscribe(compra => {
        this.compra = compra;
        this.compra.fecha = this.compra.fecha.substring(0, 10);
      });
    }

    this._clienteService.obtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    });

    this._articuloService.obtenerArticulos().subscribe(articulos => {
      this.articulos = articulos;
    });
  }

  guardarCompra(): void {
    this.compra.articulo = undefined;
    this.compra.cliente = undefined;
    this.compra.articuloID = parseInt(this.compra.articuloID + "");
    this.compra.clienteID = parseInt(this.compra.clienteID + "");

    if (this.compra.id) {
      this._compraService.actualizarCompra(this.compra.id, this.compra).subscribe(() => {
        this._router.navigate(["/compras"]);
      });
    } else {
      this._compraService.agregarCompra(this.compra).subscribe(compra => {
        this._router.navigate(["/compras"]);
      });
    }
  }
}
