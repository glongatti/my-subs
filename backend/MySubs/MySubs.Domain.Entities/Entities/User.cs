using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Entities.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public static User Create( string name, string email,string password) => new User
        {
            Name = name,
            Email = email,
            Password = password
        };
    }
}
