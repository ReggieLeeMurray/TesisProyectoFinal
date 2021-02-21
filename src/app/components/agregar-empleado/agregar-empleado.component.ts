import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Departamento } from 'src/app/models/departamento';
import { TipoPlanilla } from 'src/app/models/tipoplanilla';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { TipoplanillaService } from 'src/app/services/tipoplanilla.service';
import getISOWeek from 'date-fns/getISOWeek';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
export class AgregarEmpleadoComponent implements OnInit {
  empleadosForm: FormGroup;
  idEmpleado = 0;
  idDepto = 0;
  idTP = 0;
  temporal = 0;
  accion = 'Agregar';
  loading = false;
  empleado: Empleado;
  departamento: Departamento;
  tp: TipoPlanilla;
  listDeptos: Departamento[];
  listTP: TipoPlanilla[];
  isEnglish = false;
  date = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService,
    private router: Router,
    private departamentosService: DepartamentosService,
    private TipoplanillaService: TipoplanillaService
  ) {
    this.empleadosForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      n_cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaingreso: ['', Validators.required],
      depto: ['', Validators.required],
      salariobase: ['', Validators.required],
      tplanilla: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idEmpleado = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
    this.cargarDepto();
    this.cargarTP();
  }

  cargarDepto() {
    this.loading = true;
    this.departamentosService.getListDeptos().subscribe((data) => {
      this.loading = false;
      this.listDeptos = data;
    });
  }

  cargarTP() {
    this.loading = true;
    this.TipoplanillaService.getListTipoPlanilla().subscribe((data) => {
      this.loading = false;
      this.listTP = data;
    });
  }

  guardarEmpleados() {
    if (this.accion == 'Agregar') {
      const empleado: Empleado = {
        fechaIngreso: this.empleadosForm.get('fechaingreso').value,
        nombres: this.empleadosForm.get('nombre').value,
        apellidos: this.empleadosForm.get('apellido').value,
        direccion: this.empleadosForm.get('direccion').value,
        n_Cedula: this.empleadosForm.get('n_cedula').value,
        salarioBase: this.empleadosForm.get('salariobase').value,
        departamentoID: parseInt(this.empleadosForm.get('depto').value),
        planillaID: parseInt(this.empleadosForm.get('tplanilla').value),
      };
      this.empleadosService.guardarEmpleados(empleado).subscribe((data) => {
        this.router.navigate(['/listado']);
      });
    } else {
      const empleado: Empleado = {
        id: this.empleado.id,
        fechaIngreso: this.empleadosForm.get('fechaingreso').value,
        nombres: this.empleadosForm.get('nombre').value,
        apellidos: this.empleadosForm.get('apellido').value,
        direccion: this.empleadosForm.get('direccion').value,
        n_Cedula: this.empleadosForm.get('n_cedula').value,
        salarioBase: this.empleadosForm.get('salariobase').value,
        departamentoID: parseInt(this.empleadosForm.get('depto').value),
        planillaID: parseInt(this.empleadosForm.get('tplanilla').value),
      };

      this.empleadosService
        .actualizarEmpleado(this.idEmpleado, empleado)
        .subscribe((data) => {
          this.router.navigate(['/listado']);
        });
    }
    console.log(this.empleadosForm);
  }

  esEditar() {
    if (this.idEmpleado > 0) {
      this.accion = 'Editar';
      this.empleadosService
        .cargarEmpleados(this.idEmpleado)
        .subscribe((data) => {
          this.empleado = data;
          this.empleadosForm.patchValue({
            nombre: data.nombres,
            apellido: data.apellidos,
            n_cedula: data.n_Cedula,
            fechaingreso: data.fechaIngreso,
            direccion: data.direccion,
            salariobase: data.salarioBase,
          });
        });
      this.departamentosService.cargarDeptos(this.idDepto).subscribe((data) => {
        this.departamento = data;
        this.empleadosForm.patchValue({
          depto: data.id,
        });
      });
      this.TipoplanillaService.cargarTipoPlanilla(this.idTP).subscribe(
        (data) => {
          this.tp = data;
          this.empleadosForm.patchValue({
            planillaID: data.id,
          });
        }
      );
    }
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }
}
