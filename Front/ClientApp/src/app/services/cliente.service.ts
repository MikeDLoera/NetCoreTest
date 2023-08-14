import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ClienteService {
    public apiUrl: string;

    constructor(private http: HttpClient) { 
        this.apiUrl = environment.apiUrl + '/cliente';
    }

    obtenerClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiUrl);
    }

    obtenerCliente(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
    }

    agregarCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.apiUrl, cliente);
    }

    actualizarCliente(id: number, cliente: Cliente): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, cliente);
    }

    eliminarCliente(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
