using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class ServiceResponse
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public static async Task<ServiceResponse> Create(long id, string name) => new ServiceResponse
        {
            Id = id,
            Name = name
        };
    }
}
