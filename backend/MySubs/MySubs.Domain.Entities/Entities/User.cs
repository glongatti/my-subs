using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Entities.Entities
{
    [Table("Users")]
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool AcceptTermsOfUse { get; set; }
        public bool Active { get; set; }
        public DateTime DateAcceptTermsOfUse { get; set; }
        public static async Task<User> Create( string name, string email,string password, bool accept, bool active, DateTime data) => new User
        {
            Name = name,
            Email = email,
            Password = password,
            AcceptTermsOfUse = accept,
            Active = active,
            DateAcceptTermsOfUse = data
        };
        public static async Task<User> Create(int id, string name, string email, string password, bool accept, bool active, DateTime data) => new User
        {
            Id = id,
            Name = name,
            Email = email,
            Password = password,
            AcceptTermsOfUse = accept,
            Active = active,
            DateAcceptTermsOfUse = data
        };
    }
}
