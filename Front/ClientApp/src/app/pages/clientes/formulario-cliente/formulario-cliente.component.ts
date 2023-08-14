import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
  providers: [ClienteService]
})
export class FormularioClienteComponent implements OnInit {
  cliente: Cliente = {
    nombre: '',
    apellidos: '',
    direccion: ''
  };

  constructor(
    private _clienteService: ClienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id !== null) {
      this._clienteService.obtenerCliente(parseInt(id)).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  guardarCliente(): void {
    if (this.cliente.id) {
      this._clienteService.actualizarCliente(this.cliente.id, this.cliente).subscribe(() => {
        this._router.navigate(["/clientes"]);
      });
    } else {
      this._clienteService.agregarCliente(this.cliente).subscribe(cliente => {
        this._router.navigate(["/clientes"]);
      });
    }
  }
}
