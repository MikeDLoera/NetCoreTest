import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra.model';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
  providers: [CompraService]
})
export class ListaComprasComponent implements OnInit {
  compras: Compra[] = [];
  compraSeleccionada: Compra = {
    clienteID: 0,
    articuloID: 0,
    fecha: ''
  };

  constructor(private _compraService: CompraService) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  obtenerCompras(): void {
    this._compraService.obtenerCompras().subscribe(compras => {
      this.compras = compras.map(compra => {
        compra.fecha = compra.fecha.substring(0, 10);
        return compra;
      });
    });
  }

  seleccionarCompra(compra: Compra): void {
    this.compraSeleccionada = compra;
  }

  eliminarCompra(id: number): void {
    this._compraService.eliminarCompra(id).subscribe(() => {
      this.compras = this.compras.filter(compra => compra.id !== id);
    });
  }
}
