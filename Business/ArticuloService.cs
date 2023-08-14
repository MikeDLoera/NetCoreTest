using Data;
using Entities;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    public class ArticuloService
    {
        private readonly MyDbContext _dbContext;

        public ArticuloService(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Articulo> ObtenerArticulos()
        {
            return _dbContext.Articulo.ToList();
        }

        public Articulo ObtenerArticulo(int id)
        {
            return _dbContext.Articulo.FirstOrDefault(articulo => articulo.ID == id);
        }

        public void AgregarArticulo(Articulo articulo)
        {
            _dbContext.Articulo.Add(articulo);
            _dbContext.SaveChanges();
        }

        public void ActualizarArticulo(Articulo articulo)
        {
            _dbContext.Articulo.Update(articulo);
            _dbContext.SaveChanges();
        }

        public void EliminarArticulo(int id)
        {
            var articulo = _dbContext.Articulo.FirstOrDefault(articulo => articulo.ID == id);
            if (articulo != null)
            {
                _dbContext.Articulo.Remove(articulo);
                _dbContext.SaveChanges();
            }
        }
    }
}
