using BEProyectoFinal.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BEProyectoFinal.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsuarioController : ControllerBase
  {

    private readonly AplicationDBContext _context;


    public UsuarioController(AplicationDBContext context)
    {
      _context = context;
    }


    // GET: api/<UsuarioController>
    [HttpGet]
    public ActionResult<List<Usuarios>> Get()
    {
      try
      {
        var ListUsuarios = _context.Usuarios.ToList();
        return Ok(ListUsuarios);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // GET api/<UsuarioController>/5
    [HttpGet("{id}")]
    public ActionResult<Usuarios> Get(int id)
    {
      try
      {
        var usuarios = _context.Usuarios.Find(id);
        if (usuarios == null)
        {
          return NotFound();
        }
        return Ok(usuarios);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
    // POST api/<UsuarioController>
    [HttpPost]
    public ActionResult Post([FromBody] Usuarios usuarios)
    {
      try
      {
        _context.Add(usuarios);
        _context.SaveChanges();
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // PUT api/<UsuarioController>/5
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] Usuarios usuarios)
    {
      try
      {
        if (id != usuarios.Id)
        {
          return BadRequest();
        }
        _context.Entry(usuarios).State = EntityState.Modified;
        _context.Update(usuarios);
        _context.SaveChanges();
        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // DELETE api/<UsuarioController>/5
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
      try
      {
        var usuarios = _context.Usuarios.Find(id);
        if (usuarios == null)
        {
          return NotFound();
        }
        _context.Remove(usuarios);
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
