using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class MyDbContext : DbContext
    {
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Tienda> Tienda { get; set; }
        public DbSet<Articulo> Articulo { get; set; }
        public DbSet<Inventario> Inventario { get; set; }
        public DbSet<Compra> Compra { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
