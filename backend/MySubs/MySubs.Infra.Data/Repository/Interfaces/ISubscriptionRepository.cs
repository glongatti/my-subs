using MySubs.Domain.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Infra.Data.Repository.Interfaces
{
    public interface ISubscriptionRepository
    {
        long Add(Subscription entity);
        Task<IEnumerable<SubscriptionScreen>> SubscriptionByIdUser(long idUser);
        bool IsConnected();
    }
}
