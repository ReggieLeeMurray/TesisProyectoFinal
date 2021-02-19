import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Departamento } from 'src/app/models/departamento';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
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
  accion = 'Agregar';
  loading = false;
  empleado: Empleado;
  departamento: Departamento;
  listDeptos: Departamento[];
  isEnglish = false;
  date = null;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService,
    private router: Router,
    private DepartamentosService: DepartamentosService
  ) {
    this.empleadosForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      n_cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaingreso: ['', Validators.required],
      depto: ['', Validators.required],
      test: ['', Validators.required],
      salariobase: ['', Validators.required]
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idEmpleado = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
    this.cargarDepto();

  }

  cargarDepto() {
    this.loading = true;
    this.DepartamentosService.getListDeptos().subscribe(data => {
      this.loading = false;
      this.listDeptos = data;
    })
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
        departamentoID: this.empleadosForm.get('depto').value
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
        departamentoID: this.empleadosForm.get('depto').value

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
            depto: data.departamentoID,
          });
        });
    }
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }


  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }


}
