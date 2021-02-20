import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Departamento } from 'src/app/models/departamento';
import { NzModalService } from 'ng-zorro-antd/modal';

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
  nombres;

  constructor(
    private EmpleadosService: EmpleadosService,
    private DepartamentosService: DepartamentosService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.cargarEmpleado();
    this.cargarDepto();
  }

  cargarDepto() {
    this.loading = true;
    this.DepartamentosService.getListDeptos().subscribe((data) => {
      this.loading = false;
      this.listDeptos = data;
    });
  }

  cargarEmpleado() {
    this.loading = true;
    this.EmpleadosService.getListEmpleados().subscribe((data) => {
      this.loading = false;
      this.listEmpleados = data;
    });
  }

  delete(id: number) {
    this.loading = true;
    this.EmpleadosService.deleteEmpleados(id).subscribe((data) => {
      this.cargarEmpleado();
      this.loading = false;
    });
  }

  Search() {
    if (this.nombres != "") {
      this.listEmpleados = this.listEmpleados.filter((res) => {
        return res.nombres
          .toLocaleLowerCase()
          .match(this.nombres.toLocaleLowerCase());
      });
    } else if (this.nombres == "") {
      this.ngOnInit();
    }
  }

  showDeleteConfirm(id): void {
    this.modal.confirm({
      nzTitle: '¿Esta seguro que desea eliminar este empleado?',
      nzContent: '<b style="color: red;">Esta accion es permanente.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.delete(id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}

export class NzDemoInputpreSuffixComponent { }
export class NzDemoButtonSizeComponent { }
export class NzDemoModalConfirmComponent { }
