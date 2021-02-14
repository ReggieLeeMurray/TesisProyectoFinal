import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
export class AgregarEmpleadoComponent implements OnInit {
  empleadosForm: FormGroup;
  idEmpleado = 0;
  accion = 'Agregar';
  loading = false;
  empleado: Empleado;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService,
    private router: Router
  ) {
    this.empleadosForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      n_cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      depto: ['', Validators.required],
      salariobase: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idEmpleado = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarEmpleados() {
    if (this.accion === 'Agregar') {
      const empleado: Empleado = {
        fechaIngreso: new Date(),
        nombres: this.empleadosForm.get('nombre').value,
        apellidos: this.empleadosForm.get('apellido').value,
        direccion: this.empleadosForm.get('direccion').value,
        n_Cedula: this.empleadosForm.get('n_cedula').value,
        depto: this.empleadosForm.get('depto').value,
        salarioBase: this.empleadosForm.get('salariobase').value,
      };
      this.empleadosService.guardarEmpleados(empleado).subscribe((data) => {
        this.router.navigate(['/listado']);
      });
    }else{
      const empleado: Empleado = {
        id: this.empleado.id,
        fechaIngreso: this.empleado.fechaIngreso,
        nombres: this.empleadosForm.get('nombre').value,
        apellidos: this.empleadosForm.get('apellido').value,
        direccion: this.empleadosForm.get('direccion').value,
        n_Cedula: this.empleadosForm.get('n_cedula').value,
        depto: this.empleadosForm.get('depto').value,
        salarioBase: this.empleadosForm.get('salariobase').value,
      };
      this.empleadosService.actualizarEmpleado(this.idEmpleado, empleado).subscribe(data =>{
        this.router.navigate(['/listado']);
      })
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
            depto: data.depto,
            salariobase: data.salarioBase,
          });
        });
    }
  }
}
