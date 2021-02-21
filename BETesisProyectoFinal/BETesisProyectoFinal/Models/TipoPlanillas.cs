using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BEProyectoFinal.Models
{
  public class TipoPlanillas
  {
    public int Id { get; set; }
    [Required]
    public string Descripcion { get; set; }
  }
}
