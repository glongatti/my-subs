using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class ListSubscriptionResponse : ResponseResult
    {
        public List<SubscriptionResponse> Subscriptions { get; set; }
        public static async Task<ListSubscriptionResponse> Create(List<SubscriptionResponse> subscriptions) => new ListSubscriptionResponse
            {
                Subscriptions = subscriptions,
               
            };
    }
}

