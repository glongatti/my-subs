using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;
using MySubs.Infra.Data.UnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services
{
    public class ServiceService : IServiceService
    {
        private IUnitOfWork _uow;

        public ServiceService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<IEnumerable<ServiceResponse>> FindAll()
        {
            var result = _uow.ServiceRepository.FindAll();
            List<ServiceResponse> lstPlanTypeResponse = new List<ServiceResponse>();
            foreach (var item in result)
            {
                lstPlanTypeResponse.Add(await ServiceResponse.Create(item.Id, item.Name));
            }
            return lstPlanTypeResponse;
        }

        public T Instance<T>(Func<T> method)
        {
            if (_uow.ServiceRepository == null || _uow == null || _uow.IsWowDisposed())
                _uow = _uow.Create(_uow.GetConnection());

            return method();
        }
    }
}
