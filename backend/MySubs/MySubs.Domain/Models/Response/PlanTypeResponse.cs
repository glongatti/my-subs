using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class PlanTypeResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public static async Task<PlanTypeResponse> Create(int id, string name) => new PlanTypeResponse
        {
            Id = id,
            Name = name
        };
    }
}
