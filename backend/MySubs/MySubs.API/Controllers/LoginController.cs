using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

namespace MySubs.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _userService;
        public LoginController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        //[EnableCors("AnotherPolicy")]
        [Route("Login")]
        public async Task<ActionResult<LoginResponse>> RegisterUser([FromBody] LoginRequest login)
        {
            try
            {

                if (!ModelState.IsValid)
                    return BadRequest(login);

                return Ok(await _userService.Login(login));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

    }
}