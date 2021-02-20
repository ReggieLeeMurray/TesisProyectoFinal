import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/informacion' },
  { path: 'informacion', component: InformacionComponent },
  { path: 'agregar', component: AgregarEmpleadoComponent },
  { path: 'editar/:id', component: AgregarEmpleadoComponent },
  { path: 'listado', component: ListaEmpleadosComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
