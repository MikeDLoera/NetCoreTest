import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CompraService {
    private apiUrl = environment.apiUrl + '/compra';

    constructor(private http: HttpClient) { }

    obtenerCompras(): Observable<Compra[]> {
        return this.http.get<Compra[]>(this.apiUrl);
    }

    obtenerCompra(id: number): Observable<Compra> {
        return this.http.get<Compra>(`${this.apiUrl}/${id}`);
    }

    agregarCompra(compra: Compra): Observable<Compra> {
        return this.http.post<Compra>(this.apiUrl, compra);
    }

    actualizarCompra(id: number, compra: Compra): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, compra);
    }

    eliminarCompra(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
