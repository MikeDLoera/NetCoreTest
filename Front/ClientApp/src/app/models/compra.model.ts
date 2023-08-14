import { Articulo } from "./articulo.model";
import { Cliente } from "./cliente.model";

export interface Compra {
    id?: number,
    clienteID: number;
    articuloID: number;
    fecha: string;
    cliente?: Cliente;
    articulo?: Articulo;
}