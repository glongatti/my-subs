using MySubs.Domain.Common;
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
    public class SubscriptionService : ISubscriptionService
    {
        private IUnitOfWork _uow;

        public SubscriptionService(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public T Instance<T>(Func<T> method)
        {
            if (_uow.SubscriptionRepository == null || _uow == null || _uow.IsWowDisposed())
                _uow = _uow.Create(_uow.GetConnection());

            return method();
        }
        public async Task<RegisterSubResponse> Add(RegisterSubRequest entity)
        {
            try
            {
                var sub = await Subscription.Create(entity.IdUser, entity.IdPlanType, entity.IdService, entity.IdCurrency, true, entity.DateSignature, true, entity.Price);
                var id = _uow.SubscriptionRepository.Add(sub);
                if (id > 0)
                {
                    _uow.Commit();
                    var retorno = await RegisterSubResponse.Create(id);
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "Cadastro realizado com sucesso.";
                    return retorno;
                }
                else
                {
                    var retorno = await RegisterSubResponse.Create(0);
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "Cadastro não realizado.";
                    return retorno;
                }
            }
            catch (Exception ex)
            {
                var retorno = await RegisterSubResponse.Create(0);
                retorno.ResultType = ResultType.Error;
                retorno.Message = ex.Message;
                return retorno;
            }
        }

        public async Task<ListSubscriptionResponse> SubscriptionByIdUser(long idUser)
        {
            ListSubscriptionResponse listaRetorno;
            List<SubscriptionResponse> listaSubscriptions = new List<SubscriptionResponse>();
            try
            {
                var retorno = await _uow.SubscriptionRepository.SubscriptionByIdUser(idUser);
                foreach (var item in retorno)
                {
                    listaSubscriptions.Add(await SubscriptionResponse.Create(item.Id, item.IdPlanType, item.Plan, item.IdService, item.Service,
                        item.IdCurrency, item.Currency, item.Active, item.DateSignature.ToString(), item.CancelRenewal, item.Price.ToString()));
                }
               
                listaRetorno = await ListSubscriptionResponse.Create(listaSubscriptions);
                listaRetorno.ResultType = ResultType.Success;
                listaRetorno.Message = "Busca realizada com sucesso.";
                return listaRetorno;
            }
            catch (Exception ex) 
            {
                listaRetorno = await ListSubscriptionResponse.Create(null);
                listaRetorno.ResultType = ResultType.Error;
                listaRetorno.Error = ex;
                listaRetorno.Message = "Não foi possivel listar suas assinaturas.";
                return listaRetorno;
            }
            
        }
    }
}
