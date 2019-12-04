using MySubs.Domain.Entities.Entities;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Services.Interfaces
{
    public interface IUserService
    {
        RegisterUserResponse Add(RegisterUserRequest entity);
    }
}
