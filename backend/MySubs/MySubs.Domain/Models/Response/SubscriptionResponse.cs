using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class SubscriptionResponse
    {
        public long Id { get; set; }
        public long IdPlanType { get; set; }
        public string Plan { get; set; }
        public long IdService { get; set; }
        public string Service { get; set; }
        public long IdCurrency { get; set; }
        public string Currency { get; set; }
        public string Price { get; set; }
        public bool CancelRenewal { get; set; }
        public string DateSignature { get; set; }
        public bool Active { get; set; }

        public static async Task<SubscriptionResponse> Create(long id, long idPlanType, string plan, long idService,
           string service, long idCurrency, string currency, bool active, string data, bool cancelRenewal, string price) => new SubscriptionResponse
           {
               Id = id,
               IdPlanType = idPlanType,
               IdService = idService,
               IdCurrency = idCurrency,
               Active = active,
               DateSignature = data,
               CancelRenewal = cancelRenewal,
               Price = price,
               Plan = plan,
               Service = service,
               Currency = currency
           };
    }
}
