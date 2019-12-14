﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Entities.Entities
{
    [Table("MySubs")]
    public class Subscription
    {
        public long Id { get; set; }
        public long IdUser { get; set; }
        public long IdPlanType { get; set; }
        public long IdService { get; set; }
        public long IdCurrency { get; set; }
        public double Price { get; set; }
        public bool CancelRenewal { get; set; }
        public DateTime DateSignature { get; set; }
        public bool Active { get; set; }
        public static async Task<Subscription> Create(long idUser, long idPlanType, long idService, long idCurrency, bool active, DateTime data, bool cancelRenewal, double price) => new Subscription
        {
            IdUser = idUser,
            IdPlanType = idPlanType,
            IdService = idService,
            IdCurrency = idCurrency,
            Active = active,
            DateSignature = data,
            CancelRenewal = cancelRenewal,
            Price = price
        };
        public static async Task<Subscription> Create(int id) => new Subscription
        {

            Id = id
        };
    }
}
