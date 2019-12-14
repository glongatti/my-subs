using MySubs.Infra.Data.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Data.UnitOfWork.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        //TO-DO ARRUMAR
        IUserRepository UserRepository { get; set; }
        IPlanTypeRepository PlanTypeRepository { get; set; }
        IServiceRepository ServiceRepository { get; set; }
        ISubscriptionRepository SubscriptionRepository { get; set; }
        ICurrencyRepository CurrencyRepository { get; set; }
        bool Commit();
        IDisposable CreateContext(string connectionString);
        string GetConnection();
        IUnitOfWork Create(string connectionString);

        bool IsWowDisposed();
    }
}
