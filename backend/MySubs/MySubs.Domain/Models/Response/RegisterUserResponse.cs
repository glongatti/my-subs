using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class RegisterUserResponse : ResponseResult
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public static async Task<RegisterUserResponse> Create(long id, string name, string email, string token) => new RegisterUserResponse
        {
            Id = id,
            Name = name,
            Email = email,
            Token = token
        };
    }
}
