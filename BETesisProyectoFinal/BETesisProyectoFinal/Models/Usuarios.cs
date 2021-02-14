using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BETesisProyectoFinal.Models
{
  public class Usuarios
  {
    public int Id { get; set; }
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
    public int N_Cedula { get; set; }
    public string Direccion { get; set; }
    public DateTime FechaIngreso { get; set; }
    public string Depto { get; set; }
    public int SalarioBase { get; set; }
  }
}
