﻿using MySubs.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Models.Response
{
    public class UpdateUserResponse : ResponseResult
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public static async Task<UpdateUserResponse> Create(int id = 0 , string name="", string email="") => new UpdateUserResponse
        {
            Id = id,
            Name = name,
            Email = email
        };
    }
}
