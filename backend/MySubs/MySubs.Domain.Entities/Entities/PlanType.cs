using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Entities.Entities
{
    [Table("PlanType")]
    public class PlanType
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }

        public static async Task<PlanType> Create(long id, string name, bool active) => new PlanType
        {
            Id = id,
            Name = name,
            Active = active,
        };
    }
}
