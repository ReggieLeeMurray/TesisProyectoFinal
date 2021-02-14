import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})

export class ListaEmpleadosComponent  implements OnInit {
listEmpleados: Empleado[];
loading = false;

  constructor(private EmpleadosService: EmpleadosService ) { }

  ngOnInit(): void {
    this.cargarEmpleado();
  }
  cargarEmpleado() {
    this.loading = true;
    this.EmpleadosService.getListEmpleados().subscribe(data =>{
      this.loading = false;
      this.listEmpleados=data;
    })
  }
  
  delete(id: number){
    this.loading = true;
    this.EmpleadosService.deleteEmpleados(id).subscribe(data =>{
      this.cargarEmpleado();
      this.loading = false;
    })
     
  }
   
}

