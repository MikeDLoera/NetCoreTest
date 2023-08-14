using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Compra
    {
        public int ID { get; set; }
        public int ClienteID { get; set; }
        public int ArticuloID { get; set; }
        public DateTime Fecha { get; set; }

        public Cliente Cliente { get; set; }
        public Articulo Articulo { get; set;}
    }
}
