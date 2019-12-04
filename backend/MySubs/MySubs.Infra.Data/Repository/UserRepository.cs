using MySubs.Domain.Entities.Entities;
using MySubs.Infra.Data.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace MySubs.Infra.Data.Repository
{
    public class UserRepository : AbstractRepository<User>, IUserRepository
    {
        private IDbTransaction _transaction;
        private IDbConnection _connection => _transaction.Connection;
        public UserRepository(IDbTransaction transaction) : base(transaction)
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

    }
}
