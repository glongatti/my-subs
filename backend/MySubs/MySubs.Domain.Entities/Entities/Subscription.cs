using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Entities.Entities
{
    [Table("MySubs")]
    public class Subscription
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public int IdPlanType { get; set; }
        public int IdService { get; set; }
        public double Price { get; set; }
        public bool CancelRenewal { get; set; }
        public DateTime DateSignature { get; set; }
        public bool Active { get; set; }
        public static async Task<Subscription> Create(int idUser, int idPlanType, int idService, bool active, DateTime data, bool cancelRenewal, double price) => new Subscription
        {
            IdUser = idUser,
            IdPlanType = idPlanType,
            IdService = idService,
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
