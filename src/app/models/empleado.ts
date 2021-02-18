import { Departamento } from "src/app/models/departamento";

export class Empleado {
    id?: number;
    nombres: string;
    apellidos: string;
    n_Cedula: string;
    direccion: string;
    fechaIngreso: Date;
    depto: string;
    salarioBase: number;
   // id_depto: Departamento;
}