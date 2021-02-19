using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BEProyectoFinal.Models
{
  public class Roles
  {
    public int Id { get; set; }
    [Required]
    public string Descripcion { get; set; }
  }
}
