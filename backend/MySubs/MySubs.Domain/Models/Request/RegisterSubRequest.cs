using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Models.Request
{
    public class RegisterSubRequest
    {
        public int IdUser { get; set; }
        public int IdPlanType { get; set; }
        public int IdService { get; set; }
        public double Price { get; set; }
        public bool CancelRenewal { get; set; }
        public DateTime DateSignature { get; set; }
        public bool Active { get; set; }
    }
}
