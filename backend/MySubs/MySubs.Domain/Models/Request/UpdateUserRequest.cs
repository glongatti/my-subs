using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Models.Request
{
    public class UpdateUserRequest
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
