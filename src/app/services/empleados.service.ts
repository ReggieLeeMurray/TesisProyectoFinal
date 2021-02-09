import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  myAppUrl = 'https://localhost:44301/';
  myApiUrl = 'api/Empleado';

  httpOptions={
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
}
