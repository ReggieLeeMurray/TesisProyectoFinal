using BEProyectoFinal;
using BETesisProyectoFinal.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BETesisProyectoFinal.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EmpleadoController : ControllerBase
  {

    private readonly AplicationDBContext _context;

    public EmpleadoController(AplicationDBContext context)
    {
      _context = context;
    }

    // GET: api/<EmpleadoController>
    [HttpGet]
    public ActionResult<List<Empleados>> Get()
    {
      try
      {
        var ListEmpleados = _context.Empleados.ToList();
        return Ok(ListEmpleados);
      }
      catch(Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // GET api/<EmpleadoController>/5
    [HttpGet("{id}")]
    public ActionResult<Empleados> Get(int id)
    {
      try
      {
        var  empleados = _context.Empleados.Find(id);
        if (empleados == null)
        {
          return NotFound();
        }
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // POST api/<EmpleadoController>
    [HttpPost]
    public ActionResult Post([FromBody] Empleados empleados)
    {
      try
      {
        _context.Add(empleados);
        _context.SaveChanges();
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // PUT api/<EmpleadoController>/5
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] Empleados empleados)
    {
      try
      {
        if(id!=empleados.Id)
        {
          return BadRequest();
        }
        _context.Entry(empleados).State = EntityState.Modified;
        _context.Update(empleados);
        _context.SaveChanges();
        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // DELETE api/<EmpleadoController>/5
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
      try
      {
        var empleado = _context.Empleados.Find(id);
        if (empleado == null)
        {
          return NotFound();
        }
        _context.Remove(empleado);
        _context.SaveChanges();
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
