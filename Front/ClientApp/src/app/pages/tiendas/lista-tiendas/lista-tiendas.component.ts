import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/tienda.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css'],
  providers: [TiendaService]
})
export class ListaTiendasComponent implements OnInit {
  tiendas: Tienda[] = [];
  tiendaSeleccionada: Tienda = {
    sucursal: '',
    direccion: ''
  };

  constructor(private _tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.obtenerTiendas();
  }

  obtenerTiendas(): void {
    this._tiendaService.obtenerTiendas().subscribe(tiendas => {
      this.tiendas = tiendas;
    });
  }

  seleccionarTienda(tienda: Tienda): void {
    this.tiendaSeleccionada = tienda;
  }

  eliminarTienda(id: number): void {
    this._tiendaService.eliminarTienda(id).subscribe(() => {
      this.tiendas = this.tiendas.filter(tienda => tienda.id !== id);
    });
  }
}
