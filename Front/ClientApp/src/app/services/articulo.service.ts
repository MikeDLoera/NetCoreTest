import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticuloService {
    private apiUrl = environment.apiUrl + '/articulo';

    constructor(private http: HttpClient) { }

    obtenerArticulos(): Observable<Articulo[]> {
        return this.http.get<Articulo[]>(this.apiUrl);
    }

    obtenerArticulo(id: number): Observable<Articulo> {
        return this.http.get<Articulo>(`${this.apiUrl}/${id}`);
    }

    agregarArticulo(articulo: Articulo): Observable<Articulo> {
        return this.http.post<Articulo>(this.apiUrl, articulo);
    }

    actualizarArticulo(id: number, articulo: Articulo): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, articulo);
    }

    eliminarArticulo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
