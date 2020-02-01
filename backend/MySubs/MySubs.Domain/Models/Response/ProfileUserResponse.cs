using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class ProfileUserResponse : ResponseResult
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long SubsCreated { get; set; }
        public long SubsActived { get; set; }
        public long Campo3 { get; set; }
        public static async Task<ProfileUserResponse> Create(long id, string name, string email, long subsCreated, long subsActived, long tres) => new ProfileUserResponse
        {
            Id = id,
            Name = name,
            Email = email,
            SubsCreated = subsCreated,
            SubsActived = subsActived,
            Campo3 = tres
        };
        public static async Task<ProfileUserResponse> Create() => new ProfileUserResponse
        {
          
        };

    }
}
