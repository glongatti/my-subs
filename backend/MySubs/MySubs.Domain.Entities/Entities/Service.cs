using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Entities.Entities
{
    [Table("Service")]
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }

        public static async Task<Service> Create(int id, string name, bool active) => new Service
        {
            Id = id,
            Name = name,
            Active = active,
        };
    }
}
