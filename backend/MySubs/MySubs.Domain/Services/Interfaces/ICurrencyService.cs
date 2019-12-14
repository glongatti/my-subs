using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services.Interfaces
{
    public interface ICurrencyService
    {
        Task<IEnumerable<CurrencyResponse>> FindAll();
        Task<IEnumerable<long>> InsertMany(IEnumerable<RegisterCurrencyRequest> lista);
    }
}
