import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

import { FormularioArticuloComponent } from './pages/articulos/formulario-articulo/formulario-articulo.component';
import { ListaArticulosComponent } from './pages/articulos/lista-articulos/lista-articulos.component';

import { FormularioClienteComponent } from './pages/clientes/formulario-cliente/formulario-cliente.component';
import { ListaClientesComponent } from './pages/clientes/lista-clientes/lista-clientes.component';

import { FormularioTiendaComponent } from './pages/tiendas/formulario-tienda/formulario-tienda.component';
import { ListaTiendasComponent } from './pages/tiendas/lista-tiendas/lista-tiendas.component';

import { FormularioCompraComponent } from './pages/compras/formulario-compra/formulario-compra.component';
import { ListaComprasComponent } from './pages/compras/lista-compras/lista-compras.component';

import { FormularioInventarioComponent } from './pages/inventario/formulario-inventario/formulario-inventario.component';
import { ListaInventarioComponent } from './pages/inventario/lista-inventario/lista-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormularioArticuloComponent,
    ListaArticulosComponent,
    FormularioClienteComponent,
    ListaClientesComponent,
    FormularioTiendaComponent,
    ListaTiendasComponent,
    FormularioCompraComponent,
    ListaComprasComponent,
    FormularioInventarioComponent,
    ListaInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
