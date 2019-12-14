using MySubs.Domain.Entities.Entities;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;
using MySubs.Infra.Data.UnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services
{
    public class CurrencyService : ICurrencyService
    {
        private IUnitOfWork _uow;

        public CurrencyService(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public T Instance<T>(Func<T> method)
        {
            if (_uow.CurrencyRepository == null || _uow == null || _uow.IsWowDisposed())
                _uow = _uow.Create(_uow.GetConnection());

            return method();
        }

        public async Task<IEnumerable<CurrencyResponse>> FindAll()
        {
            var result = _uow.CurrencyRepository.FindAll();
            List<CurrencyResponse> lstRetorno = new List<CurrencyResponse>();
            foreach (var item in result)
            {
                lstRetorno.Add(await CurrencyResponse.Create(item.Id, item.Symbol));
            }
            return lstRetorno;
        }
        public async Task<IEnumerable<long>> InsertMany(IEnumerable<RegisterCurrencyRequest> lista)
        {
            List<Currency> lst = new List<Currency>();
            foreach (var currency in lista)
            {
                lst.Add(await Currency.Create(0, currency.Code, currency.Symbol, currency.Name, currency.DecimalDigits, currency.Rounding));

            }
            IEnumerable<Currency> t = lst;
            var retorno = Instance(() => _uow.CurrencyRepository.InsertMany(t));
            if (retorno != null)
            {
                _uow.Commit();
            }
            return retorno;
        }
    }
}
