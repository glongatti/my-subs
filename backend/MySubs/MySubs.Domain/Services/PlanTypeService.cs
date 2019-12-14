using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;
using MySubs.Infra.Data.UnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services
{
    public class PlanTypeService : IPlanTypeService
    {
        private IUnitOfWork _uow;

        public PlanTypeService(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public T Instance<T>(Func<T> method)
        {
            if (_uow.PlanTypeRepository == null || _uow == null || _uow.IsWowDisposed())
                _uow = _uow.Create(_uow.GetConnection());

            return method();
        }

        public async Task<IEnumerable<PlanTypeResponse>> FindAll()
        {
            var result = _uow.PlanTypeRepository.FindAll();
            List<PlanTypeResponse> lstPlanTypeResponse = new List<PlanTypeResponse>();
            foreach (var item in result)
            {
                lstPlanTypeResponse.Add(await PlanTypeResponse.Create(item.Id, item.Name));
            }
            return lstPlanTypeResponse;
        }


    }
}
