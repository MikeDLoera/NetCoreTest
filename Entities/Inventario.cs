using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Inventario
    {
        public int ID { get; set; }
        public int ArticuloID { get; set; }
        public int TiendaID { get; set; }
        public DateTime Fecha { get; set; }

        public Articulo Articulo { get; set; }
        public Tienda Tienda { get; set; }
    }
}
