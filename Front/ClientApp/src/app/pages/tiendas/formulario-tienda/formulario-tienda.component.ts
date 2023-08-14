import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-formulario-tienda',
  templateUrl: './formulario-tienda.component.html',
  styleUrls: ['./formulario-tienda.component.css'],
  providers: [TiendaService]
})
export class FormularioTiendaComponent implements OnInit {
  tienda: Tienda = {
    sucursal: '',
    direccion: ''
  };

  constructor(
    private _tiendaService: TiendaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id !== null) {
      this._tiendaService.obtenerTienda(parseInt(id)).subscribe(tienda => {
        this.tienda = tienda;
      });
    }
  }

  guardarTienda(): void {
    if (this.tienda.id) {
      this._tiendaService.actualizarTienda(this.tienda.id, this.tienda).subscribe(() => {
        this._router.navigate(["/tiendas"]);
      });
    } else {
      this._tiendaService.agregarTienda(this.tienda).subscribe(tienda => {
        this._router.navigate(["/tiendas"]);
      });
    }
  }
}
