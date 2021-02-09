import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';

const routes: Routes = [
{path: 'agregar', component: AgregarEmpleadoComponent},
{path: 'editar/:id', component: AgregarEmpleadoComponent},
{path: 'ver/:id', component: VerEmpleadosComponent},
{path: '', component: ListaEmpleadosComponent, pathMatch: 'full'},
{path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
