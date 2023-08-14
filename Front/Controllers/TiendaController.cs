using Microsoft.AspNetCore.Mvc;
using Business;
using Entities;
using System.Collections.Generic;

namespace Front.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TiendaController : Controller
    {
        private readonly TiendaService _tiendaService;

        public TiendaController(TiendaService tiendaService)
        {
            _tiendaService = tiendaService;
        }

        [HttpGet]
        public IEnumerable<Tienda> Get()
        {
            return _tiendaService.ObtenerTiendas();
        }

        [HttpGet("{id}")]
        public ActionResult<Tienda> Get(int id)
        {
            Tienda tienda = _tiendaService.ObtenerTienda(id);
            if (tienda == null)
            {
                return NotFound();
            }
            return tienda;
        }

        [HttpPost]
        public ActionResult<Tienda> Post(Tienda tienda)
        {
            _tiendaService.AgregarTienda(tienda);
            return CreatedAtAction(nameof(Get), new { id = tienda.ID }, tienda);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Tienda tienda)
        {
            if (id != tienda.ID)
            {
                return BadRequest();
            }

            _tiendaService.ActualizarTienda(tienda);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var tienda = _tiendaService.ObtenerTienda(id);
            if (tienda == null)
            {
                return NotFound();
            }

            _tiendaService.EliminarTienda(tienda.ID);
            return NoContent();
        }

    }
}
