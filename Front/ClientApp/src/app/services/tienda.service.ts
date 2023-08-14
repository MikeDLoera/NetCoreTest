import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../models/tienda.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TiendaService {
    private apiUrl = environment.apiUrl + '/tienda';

    constructor(private http: HttpClient) { }

    obtenerTiendas(): Observable<Tienda[]> {
        return this.http.get<Tienda[]>(this.apiUrl);
    }

    obtenerTienda(id: number): Observable<Tienda> {
        return this.http.get<Tienda>(`${this.apiUrl}/${id}`);
    }

    agregarTienda(tienda: Tienda): Observable<Tienda> {
        return this.http.post<Tienda>(this.apiUrl, tienda);
    }

    actualizarTienda(id: number, tienda: Tienda): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, tienda);
    }

    eliminarTienda(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
