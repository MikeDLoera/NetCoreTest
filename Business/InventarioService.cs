using Data;
using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    public class InventarioService
    {
        private readonly MyDbContext _dbContext;

        public InventarioService(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Inventario> ObtenerInventarios()
        {
            return _dbContext.Inventario
                .Include(inventario => inventario.Articulo)
                .Include(inventario => inventario.Tienda)
                .ToList();
        }

        public Inventario ObtenerInventario(int id)
        {
            return _dbContext.Inventario
                .Include(inventario => inventario.Articulo)
                .Include(inventario => inventario.Tienda)
                .FirstOrDefault(inventario => inventario.ID == id);
        }

        public void AgregarInventario(Inventario inventario)
        {
            _dbContext.Inventario.Add(inventario);
            _dbContext.SaveChanges();
        }

        public void ActualizarInventario(Inventario inventario)
        {
            _dbContext.Inventario.Update(inventario);
            _dbContext.SaveChanges();
        }

        public void EliminarInventario(int id)
        {
            var inventario = _dbContext.Inventario.FirstOrDefault(inventario => inventario.ID == id);
            if (inventario != null)
            {
                _dbContext.Inventario.Remove(inventario);
                _dbContext.SaveChanges();
            }
        }
    }
}
