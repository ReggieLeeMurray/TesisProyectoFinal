import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { TipoplanillaComponent } from './components/tipoplanilla/tipoplanilla.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/informacion' },
  { path: 'informacion', component: InformacionComponent },
  { path: 'tplanilla', component: TipoplanillaComponent },
  { path: 'agregar', component: AgregarEmpleadoComponent },
  { path: 'editar/:id', component: AgregarEmpleadoComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'listado', component: ListaEmpleadosComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
