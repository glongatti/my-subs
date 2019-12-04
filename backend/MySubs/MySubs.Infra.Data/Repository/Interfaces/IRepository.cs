using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Data.Repository.Interfaces
{

    public interface IRepository<TEntity> where TEntity : class, new()
    {
        TEntity FindById(long id);
        IEnumerable<TEntity> FindAll();
        long Add(TEntity entity);
        IEnumerable<long> InsertMany(IEnumerable<TEntity> entities);
        TEntity Update(TEntity entity);
        bool Delete(TEntity entity);
        TEntity InsertOrUpdate(TEntity entity, long pk);
    }
}
