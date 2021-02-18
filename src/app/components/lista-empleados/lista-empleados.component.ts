import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})


export class ListaEmpleadosComponent  implements OnInit {
listEmpleados: Empleado[];
loading = false;
size: NzButtonSize = 'large';

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

export class NzDemoInputSearchInputComponent {}
export class NzDemoButtonSizeComponent {}
  