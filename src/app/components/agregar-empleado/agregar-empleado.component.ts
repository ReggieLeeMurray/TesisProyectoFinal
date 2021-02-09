import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  empleadosForm: FormGroup;
  idEmpleado=0;
  accion='Agregar';
  constructor(private fb:FormBuilder, private route: ActivatedRoute) {
    this.empleadosForm=this.fb.group({
      //id:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      n_cedula:['', Validators.required],
      //fechaingreso:['', Validators.required],
      direccion:['', Validators.required],
      depto:['', Validators.required],
      salariobase:['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id')>0){
      this.idEmpleado=+this.route.snapshot.paramMap.get('id')
    }
   }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarEmpleados(){
  console.log(this.empleadosForm)
  }
  esEditar(){
    if(this.idEmpleado>0){
      this.accion='Editar';
      this.empleadosForm.patchValue({
        id: '1',
        nombre: 'Humberto',
        apellido: 'Zen',
        n_cedula: '0512-1972-01540',
        fechaingreso: '11/12/2011',
        depto: 'Contabilidad',
        salariobase: '20000',
      })

    }
  }
}
