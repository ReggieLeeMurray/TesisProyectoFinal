import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  empleadosForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.empleadosForm=this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      n_cedula:['', Validators.required],
      fechaingreso:['', Validators.required],
      depto:['', Validators.required],
      salariobase:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

}
