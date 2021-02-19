using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BEProyectoFinal.Models;
using BETesisProyectoFinal.Models;
using Microsoft.EntityFrameworkCore;

namespace BEProyectoFinal
{
  public class AplicationDBContext: DbContext
  {
    public DbSet<Empleados> Empleados { get; set; }

    public DbSet<Departamentos> Departamentos { get; set; }
    public DbSet<Usuarios> Usuarios { get; set; }

    public DbSet<Roles> Roles { get; set; }

    public AplicationDBContext() { }

    public AplicationDBContext(DbContextOptions options) : base(options) { }
    protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured) {
        optionsBuilder.UseMySql("Server=localhost;Database=ABMProyectoFinal;Uid=root;Pwd=admin");
      }
      
    }
  }
}
