using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class RecoverPasswordResponse : ResponseResult
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public static async Task<RecoverPasswordResponse> Create(string name = "", string email = "") => new RecoverPasswordResponse
        {
            Name = name,
            Email = email
        };
    }
}
