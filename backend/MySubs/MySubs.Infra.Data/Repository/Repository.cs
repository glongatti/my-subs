using Dapper.Contrib.Extensions;
using MySubs.Infra.Data.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace MySubs.Infra.Data.Repository
{
    public class AbstractRepository<TEntity> : IRepository<TEntity> where TEntity : class, new()
    {
        private readonly IDbTransaction _transaction;
        private IDbConnection _connection => _transaction.Connection;

        public AbstractRepository(IDbTransaction transaction)
        {
            _transaction = transaction;
        }

        public virtual IEnumerable<TEntity> FindAll()
        {
            IEnumerable<TEntity> all = null;

            all = _connection.GetAll<TEntity>(_transaction);

            return all;
        }

        public virtual TEntity FindById(long id)
        {
            TEntity entity = null;

            entity = _connection.Get<TEntity>(id, _transaction);

            return entity;
        }

        public virtual long Add(TEntity entity)
        {
            long identity = 0;

            if (entity != null)
                identity = _connection.Insert(entity, _transaction);

            return identity;
        }

        public virtual IEnumerable<long> InsertMany(IEnumerable<TEntity> entities)
        {
            IList<long> identities = new List<long>();

            if (entities != null)
            {
                long identity = 0;
                foreach (var entity in entities)
                {
                    
                    identity = _connection.Insert(entity, _transaction);

                    identities.Add(identity);
                }
            }

            return identities;
        }

        public virtual TEntity Update(TEntity entity)
        {
            if (entity != null)
                _connection.Update(entity, _transaction);

            return entity;
        }

        public virtual bool Delete(TEntity entity)
        {
            bool success = false;
            if (entity != null)
                success = _connection.Delete(entity, _transaction);

            return success;
        }

        public virtual TEntity InsertOrUpdate(TEntity entity, long pk)
        {

            if (entity != null)
            {
                if (pk == 0)
                {
                    Add(entity);
                }
                else
                {
                    TEntity entityDatabase = FindById(pk);

                    if (entityDatabase != null)
                    {
                        Update(entity);
                    }
                }
            }

            return entity;
        }
    }
}
