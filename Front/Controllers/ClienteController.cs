using Microsoft.AspNetCore.Mvc;
using Business;
using Entities;
using System.Collections.Generic;

namespace Front.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        private readonly ClienteService _clienteService;

        public ClienteController(ClienteService clienteService)
        {
            _clienteService = clienteService;
        }

        [HttpGet]
        public IEnumerable<Cliente> Get()
        {
            return _clienteService.ObtenerClientes();
        }

        [HttpGet("{id}")]
        public ActionResult<Cliente> Get(int id)
        {
            Cliente cliente = _clienteService.ObtenerCliente(id);
            if (cliente == null)
            {
                return NotFound();
            }
            return cliente;
        }

        [HttpPost]
        public ActionResult<Cliente> Post(Cliente cliente)
        {
            _clienteService.AgregarCliente(cliente);
            return CreatedAtAction(nameof(Get), new { id = cliente.ID }, cliente);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Cliente cliente)
        {
            if (id != cliente.ID)
            {
                return BadRequest();
            }

            _clienteService.ActualizarCliente(cliente);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cliente = _clienteService.ObtenerCliente(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _clienteService.EliminarCliente(cliente.ID);
            return NoContent();
        }

    }
}
