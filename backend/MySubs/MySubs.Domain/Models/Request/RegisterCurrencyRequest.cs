using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Models.Request
{
    public class RegisterCurrencyRequest
    {
        public string Symbol { get; set; }
        public string Name { get; set; }
        public long DecimalDigits { get; set; }
        public long Rounding { get; set; }
        public string Code { get; set; }
    }
}
