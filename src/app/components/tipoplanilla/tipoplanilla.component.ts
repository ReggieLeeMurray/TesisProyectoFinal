import { Component, OnInit } from '@angular/core';
import { TipoplanillaService } from 'src/app/services/tipoplanilla.service';
import { TipoPlanilla } from 'src/app/models/tipoplanilla';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tipoplanilla',
  templateUrl: './tipoplanilla.component.html',
  styleUrls: ['./tipoplanilla.component.css'],
})
export class TipoplanillaComponent implements OnInit {
  TPForm: FormGroup;
  listTP: TipoPlanilla[];
  loading = false;
  idTP = 0;
  TP;
  isVisible = false;
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [10];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private TipoplanillaService: TipoplanillaService,
    private modal: NzModalService
  ) {
    this.TPForm = this.fb.group({
      descripcion: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idTP = +this.route.snapshot.paramMap.get('id');
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
    this.cargarTP();
  }
  guardarTP() {
    const departamento: TipoPlanilla = {
      descripcion: this.TPForm.get('descripcion').value,
    };
    this.TipoplanillaService.guardarTipoPlanilla(departamento).subscribe(
      (data) => {
        this.router.navigate(['/TipoPlanilla']);
        this.cargarTP();
      }
    );
    console.log(this.TPForm);
    this.isVisible = false;
  }
  cargarTP() {
    this.loading = true;
    this.TipoplanillaService.getListTipoPlanilla().subscribe((data) => {
      this.loading = false;
      this.listTP = data;
    });
  }

  delete(id: number) {
    this.loading = true;
    this.TipoplanillaService.deleteTipoPlanilla(id).subscribe((data) => {
      this.cargarTP();
      this.loading = false;
    });
  }

  Search() {
    if (this.TP != '') {
      this.listTP = this.listTP.filter((res) => {
        return res.descripcion
          .toLocaleLowerCase()
          .match(this.TP.toLocaleLowerCase());
      });
    } else if (this.TP == '') {
      this.ngOnInit();
    }
  }

  showDeleteConfirm(id): void {
    this.modal.confirm({
      nzTitle: '¿Esta seguro que desea eliminar este tipo de planilla?',
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
