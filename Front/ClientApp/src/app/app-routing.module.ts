import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaClientesComponent } from './pages/clientes/lista-clientes/lista-clientes.component';
import { FormularioClienteComponent } from './pages/clientes/formulario-cliente/formulario-cliente.component';
import { ListaTiendasComponent } from './pages/tiendas/lista-tiendas/lista-tiendas.component';
import { FormularioTiendaComponent } from './pages/tiendas/formulario-tienda/formulario-tienda.component';
import { ListaArticulosComponent } from './pages/articulos/lista-articulos/lista-articulos.component';
import { FormularioArticuloComponent } from './pages/articulos/formulario-articulo/formulario-articulo.component';
import { ListaInventarioComponent } from './pages/inventario/lista-inventario/lista-inventario.component';
import { FormularioInventarioComponent } from './pages/inventario/formulario-inventario/formulario-inventario.component';
import { ListaComprasComponent } from './pages/compras/lista-compras/lista-compras.component';
import { FormularioCompraComponent } from './pages/compras/formulario-compra/formulario-compra.component';

const routes: Routes = [
  { path: '', component: ListaClientesComponent },
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'cliente', component: FormularioClienteComponent },
  { path: 'cliente/:id', component: FormularioClienteComponent },
  { path: 'tiendas', component: ListaTiendasComponent },
  { path: 'tienda', component: FormularioTiendaComponent },
  { path: 'tienda/:id', component: FormularioTiendaComponent },
  { path: 'articulos', component: ListaArticulosComponent },
  { path: 'articulo', component: FormularioArticuloComponent },
  { path: 'articulo/:id', component: FormularioArticuloComponent },
  { path: 'inventarios', component: ListaInventarioComponent },
  { path: 'inventario', component: FormularioInventarioComponent },
  { path: 'inventario/:id', component: FormularioInventarioComponent },
  { path: 'compras', component: ListaComprasComponent },
  { path: 'compra', component: FormularioCompraComponent },
  { path: 'compra/:id', component: FormularioCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
