using MySubs.Domain.Entities.Entities;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services.Interfaces
{
    public interface IUserService
    {
        Task<CheckMailUserResponse> FindByEmail(string email);
        Task<ProfileUserResponse> GetProfileUser(int idUser);
        Task<RegisterUserResponse> Add(RegisterUserRequest entity);
        Task<RecoverPasswordResponse> RecoverPassword(string email);
        Task<UpdateUserResponse> Update(UpdateUserRequest entity);
        Task<LoginResponse> Login(LoginRequest login);
    }
}
