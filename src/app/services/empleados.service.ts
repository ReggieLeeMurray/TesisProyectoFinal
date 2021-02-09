import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  myAppUrl = 'https://localhost:44301/';
  myApiUrl = 'api/Empleado';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getListEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.myAppUrl+this.myApiUrl);
   }

   deleteEmpleados(id:number): Observable<Empleado>{
     return this.http.delete<Empleado>(this.myAppUrl+this.myApiUrl+id);
   }

   guardarEmpleado(empleado: Empleado): Observable<Empleado>{
     return this.http.post<Empleado>(this.myAppUrl+this.myApiUrl, empleado, this.httpOptions);
   }

   cargarEmpleado(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(this.myAppUrl+this.myApiUrl + id);
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.myAppUrl+this.myApiUrl, empleado, this.httpOptions);
  }

}
