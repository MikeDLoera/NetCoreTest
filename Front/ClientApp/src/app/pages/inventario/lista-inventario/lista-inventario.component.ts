import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario.model';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-lista-inventarios',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css'],
  providers: [InventarioService]
})
export class ListaInventarioComponent implements OnInit {
  inventarios: Inventario[] = [];
  inventarioSeleccionado: Inventario = {
    tiendaID: 0,
    articuloID: 0,
    fecha: ""
  };

  constructor(private _inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.obtenerInventarios();
  }

  obtenerInventarios(): void {
    this._inventarioService.obtenerInventarios().subscribe(inventarios => {
      this.inventarios = inventarios.map(inventario => {
        inventario.fecha = inventario.fecha.substring(0, 10);
        return inventario;
      })
    });
  }

  seleccionarInventario(inventario: Inventario): void {
    this.inventarioSeleccionado = inventario;
  }

  eliminarInventario(id: number): void {
    this._inventarioService.eliminarInventario(id).subscribe(() => {
      this.inventarios = this.inventarios.filter(inventario => inventario.id !== id);
    });
  }
}
