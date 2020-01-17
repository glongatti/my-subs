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
using Microsoft.Extensions.Configuration;

namespace MySubs.Domain.Services
{
    public class UserService : IUserService
    {

        private IUnitOfWork _uow;
        private IConfiguration _configuration;

        public UserService(IUnitOfWork uow, IConfiguration config)
        {
            _uow = uow;
            _configuration = config;
        }

        public T Instance<T>(Func<T> method)
        {
            if (_uow.UserRepository == null || _uow == null || _uow.IsWowDisposed())
                _uow = _uow.Create(_uow.GetConnection());

            return method();
        }

        public async Task<RegisterUserResponse> Add(RegisterUserRequest entity)
        {
            try
            {

                var emailCadastrado = await CheckEmail(entity.Email);
                if (emailCadastrado != null)
                {
                    var retorno = await RegisterUserResponse.Create(0, entity.Name, entity.Email,"");
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "E-mail já cadastrado.";
                    return retorno;
                }

                var user = await User.Create(entity.Name, entity.Email, Util.Hash(entity.Password), true, true, DateTime.Now);
                var id = _uow.UserRepository.Add(user);
                if (id > 0)
                {
                    _uow.Commit();
                    var key = Encoding.UTF8.GetBytes(_configuration["Authentication:SecretKey"]);
                    var token = Util.GerarToken(user, DateTime.Now, key);
                    var retorno = await RegisterUserResponse.Create(user.Id, user.Name, entity.Email, token);
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "Cadastro realizado com sucesso.";
                    return retorno;
                }
                else
                {
                    var retorno = await RegisterUserResponse.Create(user.Id, user.Name, user.Email,"");
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "Cadastro não realizado.";
                    return retorno;
                }
            }
            catch (Exception ex)
            {
                var retorno = await RegisterUserResponse.Create(0, entity.Name, entity.Email,"");
                retorno.ResultType = ResultType.Error;
                retorno.Message = ex.Message;
                return retorno;
            }
        }
        private async Task<User> CheckEmail(string email)
        {
            var bla = _uow.UserRepository.FindByEmail(email);
            return bla;
        }
        private async Task<User> GetUserById(long id)
        {
            var retorno = _uow.UserRepository.FindById(id);
            return retorno;
        }
        public async Task<CheckMailUserResponse> FindByEmail(string email)
        {
            try
            {
                var bla = _uow.UserRepository.FindByEmail(email);
                if (bla == null)
                {
                    var retorno = await CheckMailUserResponse.Create();
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "O e-mail está disponivel";
                    return retorno;
                }
                else
                {
                    var retorno = await CheckMailUserResponse.Create(bla.Id, bla.Name, bla.Email);
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "O e-mail já está sendo utilizado";
                    return retorno;
                }
            }
            catch (Exception ex)
            {
                var retorno = await CheckMailUserResponse.Create(0, "", "");

                retorno.ResultType = ResultType.Error;
                retorno.Message = ex.Message;
                retorno.Error = ex;

                return retorno;
            }

        }

        public async Task<UpdateUserResponse> Update(UpdateUserRequest entity)
        {
            try
            {
                var userdb = await GetUserById(entity.Id);
                if (userdb == null)
                {
                    var retorno = await UpdateUserResponse.Create();
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "Usuário não cadastrado.";
                    return retorno;
                }
                else
                {
                    var user = await User.Create(entity.Id, entity.Name, entity.Email,
                       entity.Password, userdb.AcceptTermsOfUse, userdb.Active, userdb.DateAcceptTermsOfUse);
                    var userUpdated = _uow.UserRepository.Update(user);
                    _uow.Commit();
                    var retorno = await UpdateUserResponse.Create(userUpdated.Id, userUpdated.Name, userUpdated.Email);
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "Informações atualizadas com sucesso";
                    return retorno;
                }

            }
            catch (Exception ex)
            {
                var retorno = await UpdateUserResponse.Create();
                retorno.ResultType = ResultType.Error;
                retorno.Error = ex;
                retorno.Message = "Não foi possivel realizar a atualização das informações";
                return retorno;
            }

        }

        public async Task<LoginResponse> Login(LoginRequest login)
        {
            bool erro = false;
            string msgErro = String.Empty;
            LoginResponse loginResponse;
            var key = Encoding.UTF8.GetBytes(_configuration["Authentication:SecretKey"]);

            if (String.IsNullOrEmpty(login.Email) ||  String.IsNullOrEmpty(login.Password)) 
            {
                msgErro = "Usuário e Senha não podem ficar em branco.";
                erro = true;
            }

            if (!erro) 
            {
                try
                {
                    string password = Util.Hash(login.Password);
                    var usuario = _uow.UserRepository.FindByEmailPassword(login.Email, password);
                    if (usuario == null)
                    {
                        loginResponse = await LoginResponse.Create();
                        loginResponse.ResultType = ResultType.Error;
                        loginResponse.Message = "E-mail e/ou senha inválidos.";
                        return loginResponse;
                    }
                    var token = Util.GerarToken(usuario, DateTime.Now, key);
                    loginResponse = await LoginResponse.Create(usuario.Id, usuario.Name, usuario.Email, token);
                    loginResponse.ResultType = ResultType.Success;
                    loginResponse.Message = "Usuário autenticado com sucesso.";
                    return loginResponse;
                }
                catch (Exception ex) 
                {
                    loginResponse = await LoginResponse.Create();
                    loginResponse.ResultType = ResultType.Error;
                    loginResponse.Error = ex;
                    loginResponse.Message = "Não foi possivel realizar a sua autenticação.";
                    return loginResponse;
                }
            }

            loginResponse = await LoginResponse.Create();
            loginResponse.ResultType = ResultType.Error;
            loginResponse.Message = msgErro;
            return loginResponse;
        }
    }
}
