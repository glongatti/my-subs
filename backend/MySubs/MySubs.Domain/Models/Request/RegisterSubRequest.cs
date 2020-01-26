using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Models.Request
{
    public class RegisterSubRequest
    {
        public long IdUser { get; set; }
        public long IdPlanType { get; set; }
        public long IdService { get; set; }
        public string Service { get; set; }
        public long IdCurrency { get; set; }
        public double Price { get; set; }
        public bool CancelRenewal { get; set; }
        public DateTime DateSignature { get; set; }
        public bool Active { get; set; }
    }
}
