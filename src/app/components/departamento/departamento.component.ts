import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Departamento } from 'src/app/models/departamento';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
})
export class DepartamentoComponent implements OnInit {
  departamentosForm: FormGroup;
  listDeptos: Departamento[];
  loading = false;
  idDepto = 0;
  departamentos;
  isVisible = false;
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [10];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private DepartamentosService: DepartamentosService,
    private modal: NzModalService
  ) {
    this.departamentosForm = this.fb.group({
      descripcion: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idDepto = +this.route.snapshot.paramMap.get('id');
    }
  }
  showModal(): void {
    this.isVisible = true;
  }
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  ngOnInit(): void {
    this.cargarDepto();
  }
  guardarDepartamentos() {
    const departamento: Departamento = {
      descripcion: this.departamentosForm.get('descripcion').value,
    };
    this.DepartamentosService.guardarDeptos(departamento).subscribe((data) => {
      this.router.navigate(['/departamento']);
      this.cargarDepto();
    });
    console.log(this.departamentosForm);
    this.isVisible = false;
  }
  cargarDepto() {
    this.loading = true;
    this.DepartamentosService.getListDeptos().subscribe((data) => {
      this.loading = false;
      this.listDeptos = data;
    });
  }

  delete(id: number) {
    this.loading = true;
    this.DepartamentosService.deleteDeptos(id).subscribe((data) => {
      this.cargarDepto();
      this.loading = false;
    });
  }

  Search() {
    if (this.departamentos != '') {
      this.listDeptos = this.listDeptos.filter((res) => {
        return res.descripcion
          .toLocaleLowerCase()
          .match(this.departamentos.toLocaleLowerCase());
      });
    } else if (this.departamentos == '') {
      this.ngOnInit();
    }
  }

  showDeleteConfirm(id): void {
    this.modal.confirm({
      nzTitle: '¿Esta seguro que desea eliminar este departamento?',
      nzContent: '<b style="color: red;">Esta accion es permanente.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.delete(id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
export class NzDemoModalBasicComponent {}
