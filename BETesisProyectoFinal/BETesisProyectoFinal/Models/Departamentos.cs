using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BETesisProyectoFinal.Models;

namespace BEProyectoFinal.Models
{
  public class Departamentos
  {
    public int Id { get; set; }
    public string Descripcion { get; set; }
    public ICollection<Empleados> Empleado { get; set; }

  }
}
