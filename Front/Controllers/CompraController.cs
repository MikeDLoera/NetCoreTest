using Microsoft.AspNetCore.Mvc;
using Business;
using Entities;
using System.Collections.Generic;

namespace Front.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompraController : Controller
    {
        private readonly CompraService _compraService;

        public CompraController(CompraService compraService)
        {
            _compraService = compraService;
        }

        [HttpGet]
        public IEnumerable<Compra> Get()
        {
            return _compraService.ObtenerCompras();
        }

        [HttpGet("{id}")]
        public ActionResult<Compra> Get(int id)
        {
            Compra compra = _compraService.ObtenerCompra(id);
            if (compra == null)
            {
                return NotFound();
            }
            return compra;
        }

        [HttpPost]
        public ActionResult<Compra> Post(Compra compra)
        {
            _compraService.AgregarCompra(compra);
            return CreatedAtAction(nameof(Get), new { id = compra.ID }, compra);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Compra compra)
        {
            if (id != compra.ID)
            {
                return BadRequest();
            }

            _compraService.ActualizarCompra(compra);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var compra = _compraService.ObtenerCompra(id);
            if (compra == null)
            {
                return NotFound();
            }

            _compraService.EliminarCompra(compra.ID);
            return NoContent();
        }

    }
}
