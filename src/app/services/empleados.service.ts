import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  myAppUrl = 'https://localhost:44301/';
  myApiUrl = 'api/Empleado/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  //get
  getListEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.myAppUrl + this.myApiUrl);
  }
  //delete
  deleteEmpleados(id: number): Observable<Empleado> {
    return this.http.delete<Empleado>(this.myAppUrl + this.myApiUrl + id);
  }
  //post
  guardarEmpleados(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(
      this.myAppUrl + this.myApiUrl,
      empleado,
      this.httpOptions
    );
  }
  //get id
  cargarEmpleados(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(this.myAppUrl + this.myApiUrl + id);
  }
  //put
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(
      this.myAppUrl + this.myApiUrl + id,
      empleado,
      this.httpOptions
    );
  }
}
