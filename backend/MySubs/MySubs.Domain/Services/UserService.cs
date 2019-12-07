using MySubs.Domain.Entities.Entities;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;
using MySubs.Domain.Common;
using MySubs.Infra.Data.UnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

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

        public async Task<RegisterUserResponse> Add(RegisterUserRequest entity)
        {
            //TODO CRIPTOGRAFAR SENHA
            
            //try
            //{

                var emailCadastrado = await FindByEmail(entity.Email);
                if (emailCadastrado != null) 
                {
                    var retorno = await RegisterUserResponse.Create(0, entity.Name, entity.Email);
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "E-mail já cadastrado.";
                    return retorno;
                }
                
                var user = await User.Create(entity.Name, entity.Email, Util.Hash(entity.Password), true, true, DateTime.Now);
                var id = _uow.UserRepository.Add(user);
                if (id > 0)
                {
                    _uow.Commit();
                    var retorno = await RegisterUserResponse.Create(user.Id, user.Name, entity.Email);
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "Cadastro realizado com sucesso.";
                    return retorno;
                }
                else 
                {
                    var retorno = await RegisterUserResponse.Create(user.Id, user.Name, user.Email);
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "Cadastro não realizado.";
                    return retorno;
                }
            //}
            //catch (Exception ex) 
            //{
            //    var retorno = await RegisterUserResponse.Create(0, entity.Name, entity.Email);
            //    retorno.ResultType = ResultType.Error;
            //    retorno.Message = ex.Message;
            //    return retorno;
            //}
        }

        public async Task<User> FindByEmail(string email)
        {
            var bla = _uow.UserRepository.FindByEmail(email);
            return  bla;
        }
    }
}
