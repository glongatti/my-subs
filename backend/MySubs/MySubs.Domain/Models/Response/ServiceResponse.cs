using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class ServiceResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public static async Task<ServiceResponse> Create(int id, string name) => new ServiceResponse
        {
            Id = id,
            Name = name
        };
    }
}
