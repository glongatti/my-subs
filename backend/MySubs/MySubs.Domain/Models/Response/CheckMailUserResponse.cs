using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class CheckMailUserResponse : ResponseResult
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public static async Task<CheckMailUserResponse> Create(long id=0, string name="", string email="") => new CheckMailUserResponse
        {
            Id = id,
            Name = name,
            Email = email
        };
    }
}
