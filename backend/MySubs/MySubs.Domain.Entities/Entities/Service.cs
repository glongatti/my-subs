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
        public long Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }

        public static async Task<Service> Create(long id, string name, bool active) => new Service
        {
            Id = id,
            Name = name,
            Active = active,
        };
    }
    public class ServiceComparer : IComparer<Service>
    {
        public int Compare(Service x, Service y)
        {
            if (x == null)
            {
                if (y == null)
                {
                    return 0;
                }
                else
                {
                    return -1;
                }
            }
            else
            {
                if (y == null)
                {
                    return 1;
                }
                else
                {
                    if (x.Name.ToUpper() != y.Name.ToUpper())
                    {
                        return x.Name.CompareTo(y.Name);
                    }
                    else
                    {
                        return 0;
                    }
                }
            }
        }
    }
}
