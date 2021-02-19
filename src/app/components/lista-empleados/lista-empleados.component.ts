import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})


export class ListaEmpleadosComponent implements OnInit {
  listEmpleados: Empleado[];
  listDeptos: Departamento[];
  loading = false;
  size: NzButtonSize = 'large';

  constructor(private EmpleadosService: EmpleadosService, private DepartamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.cargarEmpleado();
    this.cargarDepto();
  }

  cargarDepto() {
    this.loading = true;
    this.DepartamentosService.getListDeptos().subscribe(data => {
      this.loading = false;
      this.listDeptos = data;
    })
  }

  cargarEmpleado() {
    this.loading = true;
    this.EmpleadosService.getListEmpleados().subscribe(data => {
      this.loading = false;
      this.listEmpleados = data;
    })
  }

  delete(id: number) {
    this.loading = true;
    this.EmpleadosService.deleteEmpleados(id).subscribe(data => {
      this.cargarEmpleado();
      this.loading = false;
    })

  }

}

export class NzDemoInputSearchInputComponent { }
export class NzDemoButtonSizeComponent { }
