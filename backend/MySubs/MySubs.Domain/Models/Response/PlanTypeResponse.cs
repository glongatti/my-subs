using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class PlanTypeResponse
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public static async Task<PlanTypeResponse> Create(long id, string name) => new PlanTypeResponse
        {
            Id = id,
            Name = name
        };
    }
}
