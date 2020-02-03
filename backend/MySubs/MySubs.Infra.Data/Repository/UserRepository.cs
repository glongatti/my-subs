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

        public User FindByEmail(string email)
        {
            string sQuery = "SELECT * FROM Users WHERE Email = @Email";

            return _connection.QueryFirstOrDefault<User>(sQuery, new { Email = email }, _transaction);
        }

        public User FindByEmailPassword(string email, string password)
        {
            string sQuery = "SELECT * FROM Users WHERE Email = @Email AND Password = @Password";

            return _connection.QueryFirstOrDefault<User>(sQuery, new { Email = email, Password = password }, _transaction);
        }

        public bool DeleteAccount(int idUser)
        {
            throw new NotImplementedException();
        }
    }
}
