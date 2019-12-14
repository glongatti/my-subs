using MySubs.Domain.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Data.Repository.Interfaces
{
    public interface ICurrencyRepository
    {
        IEnumerable<Currency> FindAll();
        IEnumerable<long> InsertMany(IEnumerable<Currency> entities);
        bool IsConnected();
    }
}
