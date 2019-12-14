using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Entities.Entities
{
    [Table("Currency")]
    public class Currency
    {
        public long Id { get; set; }
        public string Code { get; set; }
        public string Symbol { get; set; }
        public string Name { get; set; }
        public int DecimalDigits { get; set; }
        public int Rounding { get; set; }
        public static async Task<Currency> Create(long id, string code, string symbol, string name, int decimalDigits, int rouding) => new Currency
        {
            Id = id,
            Name = name,
            Code = code,
            Symbol = symbol,
            DecimalDigits = decimalDigits,
            Rounding = rouding
        };
    }
}
