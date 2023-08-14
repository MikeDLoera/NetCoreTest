import { Articulo } from "./articulo.model";
import { Tienda } from "./tienda.model";

export interface Inventario {
    id?: number,
    articuloID: number;
    tiendaID: number;
    fecha: string;
    articulo?: Articulo;
    tienda?: Tienda;
}
