using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BEProyectoFinal.Models;


namespace BETesisProyectoFinal.Models
{
  public class Empleados
  {
    public int Id { get; set; }
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
    public string N_Cedula { get; set; }
    public string Direccion { get; set; }
    public DateTime FechaIngreso { get; set; }
    public int SalarioBase { get; set; }
    public int DepartamentoId { get; set; }
    public Departamentos Departamento { get; set; }
  }
}
