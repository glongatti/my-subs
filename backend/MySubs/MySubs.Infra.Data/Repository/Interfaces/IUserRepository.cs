using MySubs.Domain.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Infra.Data.Repository.Interfaces
{
    public interface IUserRepository
    {
        long Add(User entity);
        User FindByEmail(string email);
        User FindByEmailPassword(string email, string password);
        User FindById(long id);
        User Update(User entity);
        bool IsConnected();
    }
}
