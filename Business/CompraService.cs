using Data;
using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    public class CompraService
    {
        private readonly MyDbContext _dbContext;

        public CompraService(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Compra> ObtenerCompras()
        {
            return _dbContext.Compra
                .Include(compra => compra.Cliente)
                .Include(compra => compra.Articulo)
                .ToList();
        }

        public Compra ObtenerCompra(int id)
        {
            return _dbContext.Compra
                .Include(compra => compra.Cliente)
                .Include(compra => compra.Articulo)
                .FirstOrDefault(compra => compra.ID == id);
        }

        public void AgregarCompra(Compra compra)
        {
            _dbContext.Compra.Add(compra);
            _dbContext.SaveChanges();
        }

        public void ActualizarCompra(Compra compra)
        {
            _dbContext.Compra.Update(compra);
            _dbContext.SaveChanges();
        }

        public void EliminarCompra(int id)
        {
            var compra = _dbContext.Compra.FirstOrDefault(compra => compra.ID == id);
            if (compra != null)
            {
                _dbContext.Compra.Remove(compra);
                _dbContext.SaveChanges();
            }
        }
    }
}
