using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Articulo
    {
        public int ID { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public string Imagen { get; set; }
        public int Stock { get; set; }
    }
}
