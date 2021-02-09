import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoCalculoComponent } from './components/nuevo-calculo/nuevo-calculo.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    NavbarComponent,
    NuevoCalculoComponent,
    AgregarUsuarioComponent,
    ListaEmpleadosComponent,
    ListaUsuariosComponent,
    VerEmpleadosComponent,
    VerUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
