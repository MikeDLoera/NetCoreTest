using Microsoft.AspNetCore.Mvc;
using Business;
using Entities;
using System.Collections.Generic;

namespace Front.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventarioController : Controller
    {
        private readonly InventarioService _inventarioService;

        public InventarioController(InventarioService inventarioService)
        {
            _inventarioService = inventarioService;
        }

        [HttpGet]
        public IEnumerable<Inventario> Get()
        {
            return _inventarioService.ObtenerInventarios();
        }

        [HttpGet("{id}")]
        public ActionResult<Inventario> Get(int id)
        {
            Inventario inventario = _inventarioService.ObtenerInventario(id);
            if (inventario == null)
            {
                return NotFound();
            }
            return inventario;
        }

        [HttpPost]
        public ActionResult<Inventario> Post(Inventario inventario)
        {
            _inventarioService.AgregarInventario(inventario);
            return CreatedAtAction(nameof(Get), new { id = inventario.ID }, inventario);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Inventario inventario)
        {
            if (id != inventario.ID)
            {
                return BadRequest();
            }

            _inventarioService.ActualizarInventario(inventario);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var inventario = _inventarioService.ObtenerInventario(id);
            if (inventario == null)
            {
                return NotFound();
            }

            _inventarioService.EliminarInventario(inventario.ID);
            return NoContent();
        }

    }
}
