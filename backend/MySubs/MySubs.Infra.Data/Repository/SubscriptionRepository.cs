using Dapper;
using MySubs.Domain.Entities.Entities;
using MySubs.Infra.Data.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Infra.Data.Repository
{
    public class SubscriptionRepository : AbstractRepository<Subscription>, ISubscriptionRepository
    {
        private IDbTransaction _transaction;
        private IDbConnection _connection => _transaction.Connection;
        public SubscriptionRepository(IDbTransaction transaction) : base(transaction)
        {
            _transaction = transaction;
        }

        public bool IsConnected()
        {
            try
            {
                return _connection == null || _transaction == null;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<IEnumerable<SubscriptionScreen>> SubscriptionByIdUser(long idUser)
        {
            StringBuilder sQuery = new StringBuilder();
            sQuery.AppendLine(" SELECT  ");
            sQuery.AppendLine(" 	MS.Id, ");
            sQuery.AppendLine(" 	MS.IdCurrency, ");
            sQuery.AppendLine(" 	MS.IdPlanType, ");
            sQuery.AppendLine(" 	MS.IdService, ");
            sQuery.AppendLine(" 	MS.Price, ");
            sQuery.AppendLine(" 	MS.DateSignature, ");
            sQuery.AppendLine(" 	MS.Active, ");
            sQuery.AppendLine(" 	PT.Name 'Plan', ");
            sQuery.AppendLine(" 	S.Name 'Service', ");
            sQuery.AppendLine(" 	C.Name 'Currency' ");
            sQuery.AppendLine(" FROM MySubs MS ");
            sQuery.AppendLine(" INNER JOIN PlanType PT ON PT.Id = MS.IdPlanType ");
            sQuery.AppendLine(" INNER JOIN Service S ON S.Id = MS.IdService ");
            sQuery.AppendLine(" INNER JOIN Currency C ON C.Id = MS.IdCurrency ");
            sQuery.AppendLine(" WHERE MS.IdUser = @IdUser ");

            return _connection.QueryAsync<SubscriptionScreen>(sQuery.ToString(), new { IdUser = idUser}, _transaction).Result;
        }
    }
}
