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
        Task<long> CountSubscriptionsCreatedByIdUser(long idUser);
        Task<long> CountSubscriptionsActiveByIdUser(long idUser);
        Task<long> CountSubscriptionsRenewByIdUser(long idUser);
        
        Task<IEnumerable<SubscriptionScreen>> SubscriptionByIdUser(long idUser);
        int DeleteSub(long idSub);
        bool IsConnected();
    }
}
