using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class CurrencyResponse
    {
        public long Id { get; set; }
        public string Code { get; set; }
        public static async Task<CurrencyResponse> Create(long id, string symbol) => new CurrencyResponse
        {
            Id = id,
            Code = symbol
        };
    }
}
