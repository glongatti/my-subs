using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class LoginResponse : ResponseResult
    {
        public long IdUsuario;
        public string Nome;
        public string Email;
        public string Token;
        public static async Task<LoginResponse> Create(long id=0, string nome="", string email="", string token="") => new LoginResponse
        {
            IdUsuario = id,
            Nome = nome,
            Email = email,
            Token = token
        };
    }
}
