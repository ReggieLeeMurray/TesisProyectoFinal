using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using BEProyectoFinal.Models;
using System.ComponentModel.DataAnnotations;

namespace BETesisProyectoFinal.Models
{
  public class Empleados
  {
    public int Id { get; set; }
    [Required]
    public string Nombres { get; set; }
    [Required]
    public string Apellidos { get; set; }
    [Required]
    public string N_Cedula { get; set; }
    [Required]
    public string Direccion { get; set; }
    [Required]
    public DateTime FechaIngreso { get; set; }
    public int SalarioBase { get; set; }
    [Required]
    public int DepartamentoID { get; set; }
    [ForeignKey("DepartamentoID")]
    public Departamentos Departamentos { get; set; }
    public int PlanillaID { get; set; }
    [ForeignKey("PlanillaID")]
    public TipoPlanillas TipoPlanillas { get; set; }
  }
}
