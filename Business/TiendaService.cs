using Data;
using Entities;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    public class TiendaService
    {
        private readonly MyDbContext _dbContext;

        public TiendaService(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Tienda> ObtenerTiendas()
        {
            return _dbContext.Tienda.ToList();
        }

        public Tienda ObtenerTienda(int id)
        {
            return _dbContext.Tienda.FirstOrDefault(tienda => tienda.ID == id);
        }

        public void AgregarTienda(Tienda tienda)
        {
            _dbContext.Tienda.Add(tienda);
            _dbContext.SaveChanges();
        }

        public void ActualizarTienda(Tienda tienda)
        {
            _dbContext.Tienda.Update(tienda);
            _dbContext.SaveChanges();
        }

        public void EliminarTienda(int id)
        {
            var tienda = _dbContext.Tienda.FirstOrDefault(tienda => tienda.ID == id);
            if (tienda != null)
            {
                _dbContext.Tienda.Remove(tienda);
                _dbContext.SaveChanges();
            }
        }
    }
}
