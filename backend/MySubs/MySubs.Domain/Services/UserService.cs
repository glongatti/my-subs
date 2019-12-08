﻿using MySubs.Domain.Entities.Entities;
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

            try
            {

                var emailCadastrado = await CheckEmail(entity.Email);
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
            }
            catch (Exception ex)
            {
                var retorno = await RegisterUserResponse.Create(0, entity.Name, entity.Email);
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

        public async Task<CheckMailUserResponse> FindByEmail(string email)
        {
            try
            {
                var bla = _uow.UserRepository.FindByEmail(email);
                var retorno = await CheckMailUserResponse.Create(bla.Id, bla.Name, bla.Email);
                if (!String.IsNullOrEmpty(retorno.Email))
                {
                    retorno.ResultType = ResultType.Error;
                    retorno.Message = "O e-mail já está sendo utilizado";
                }
                else
                {
                    retorno.ResultType = ResultType.Success;
                    retorno.Message = "O e-mail está disponivel";
                }
                return retorno;
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
    }
}
