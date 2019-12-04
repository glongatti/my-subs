using MySubs.Domain.Entities.Entities;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;
using MySubs.Domain.Common;
using MySubs.Infra.Data.UnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Services
{
    public class UserService : IUserService
    {

        private IUnitOfWork _uow;

        public UserService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public T Instance<T>(Func<T> method)
        {
            if (_uow.UserRepository == null || _uow == null || _uow.IsWowDisposed())
                _uow = _uow.Create(_uow.GetConnection());

            return method();
        }

        public RegisterUserResponse Add(RegisterUserRequest entity)
        {
            //TODO CRIPTOGRAFAR SENHA
            var password = "";
            var user = User.Create(entity.Name, entity.Email, password);
            var id = _uow.UserRepository.Add(user);
            return null;
            throw new NotImplementedException();
        }

    }
}
