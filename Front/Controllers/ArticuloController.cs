using Microsoft.AspNetCore.Mvc;
using Business;
using Entities;
using System.Collections.Generic;

namespace Front.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticuloController : Controller
    {
        private readonly ArticuloService _articuloService;

        public ArticuloController(ArticuloService articuloService)
        {
            _articuloService = articuloService;
        }

        [HttpGet]
        public IEnumerable<Articulo> Get()
        {
            return _articuloService.ObtenerArticulos();
        }

        [HttpGet("{id}")]
        public ActionResult<Articulo> Get(int id)
        {
            Articulo articulo = _articuloService.ObtenerArticulo(id);
            if (articulo == null)
            {
                return NotFound();
            }
            return articulo;
        }

        [HttpPost]
        public ActionResult<Articulo> Post(Articulo articulo)
        {
            _articuloService.AgregarArticulo(articulo);
            return CreatedAtAction(nameof(Get), new { id = articulo.ID }, articulo);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Articulo articulo)
        {
            if (id != articulo.ID)
            {
                return BadRequest();
            }

            _articuloService.ActualizarArticulo(articulo);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var articulo = _articuloService.ObtenerArticulo(id);
            if (articulo == null)
            {
                return NotFound();
            }

            _articuloService.EliminarArticulo(articulo.ID);
            return NoContent();
        }

    }
}
