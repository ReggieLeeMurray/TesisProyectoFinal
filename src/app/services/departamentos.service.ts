import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  myAppUrl = 'https://localhost:44301/';
  myApiUrl = 'api/Departamento/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getListDeptos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteDeptos(id: number): Observable<Departamento> {
    return this.http.delete<Departamento>(this.myAppUrl + this.myApiUrl + id);
  }

  guardarDeptos(depto: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.myAppUrl + this.myApiUrl, depto, this.httpOptions);
  }

  cargarDeptos(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(this.myAppUrl + this.myApiUrl + id);
  }

  actualizarDepto(id: number, depto: Empleado): Observable<Departamento> {
    return this.http.put<Departamento>(this.myAppUrl + this.myApiUrl + id, depto, this.httpOptions);
  }

}
