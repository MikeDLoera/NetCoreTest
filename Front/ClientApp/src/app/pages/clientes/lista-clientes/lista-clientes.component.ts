import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  providers: [ClienteService]
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSeleccionado: Cliente = {
    nombre: '',
    apellidos: '',
    direccion: ''
  };

  constructor(private _clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this._clienteService.obtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  seleccionarCliente(cliente: Cliente): void {
    this.clienteSeleccionado = cliente;
  }

  eliminarCliente(id: number): void {
    this._clienteService.eliminarCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    });
  }
}
