using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{

    public class RegisterSubResponse : ResponseResult
    {
        public long Id { get; set; }
        public static async Task<RegisterSubResponse> Create(long id) => new RegisterSubResponse
        {
            Id = id
        };
    }
}
