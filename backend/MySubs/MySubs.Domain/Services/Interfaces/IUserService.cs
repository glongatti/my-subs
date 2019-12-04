﻿using MySubs.Domain.Entities.Entities;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services.Interfaces
{
    public interface IUserService
    {
        Task<User> FindByEmail(string email);
        Task<RegisterUserResponse> Add(RegisterUserRequest entity);
    }
}
