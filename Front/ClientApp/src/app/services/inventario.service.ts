import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InventarioService {
    private apiUrl = environment.apiUrl + '/inventario';

    constructor(private http: HttpClient) { }

    obtenerInventarios(): Observable<Inventario[]> {
        return this.http.get<Inventario[]>(this.apiUrl);
    }

    obtenerInventario(id: number): Observable<Inventario> {
        return this.http.get<Inventario>(`${this.apiUrl}/${id}`);
    }

    agregarInventario(inventario: Inventario): Observable<Inventario> {
        return this.http.post<Inventario>(this.apiUrl, inventario);
    }

    actualizarInventario(id: number, inventario: Inventario): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, inventario);
    }

    eliminarInventario(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
