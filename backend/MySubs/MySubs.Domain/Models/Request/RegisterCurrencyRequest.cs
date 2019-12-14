using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Models.Request
{
    public class RegisterCurrencyRequest
    {
        public string Symbol { get; set; }
        public string Name { get; set; }
        public int DecimalDigits { get; set; }
        public int Rounding { get; set; }
        public string Code { get; set; }
    }
}
