using System.Collections.Generic;
using Data;
using Entities;
using System.Linq;

namespace Business
{
    public class ClienteService
    {
        private readonly MyDbContext _dbContext;

        public ClienteService(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Cliente> ObtenerClientes()
        {
            return _dbContext.Cliente.ToList();
        }

        public Cliente ObtenerCliente(int id)
        {
            return _dbContext.Cliente.FirstOrDefault(cliente => cliente.ID == id);
        }

        public void AgregarCliente(Cliente cliente)
        {
            _dbContext.Cliente.Add(cliente);
            _dbContext.SaveChanges();
        }

        public void ActualizarCliente(Cliente cliente)
        {
            _dbContext.Cliente.Update(cliente);
            _dbContext.SaveChanges();
        }

        public void EliminarCliente(int id)
        {
            var cliente = _dbContext.Cliente.FirstOrDefault(cliente => cliente.ID == id);
            if (cliente != null)
            {
                _dbContext.Cliente.Remove(cliente);
                _dbContext.SaveChanges();
            }
        }
    }
}
