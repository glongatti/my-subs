using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MySubs.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        //[EnableCors("AnotherPolicy")]
        [Route("RegisterUser")]
        public async Task<ActionResult<RegisterUserResponse>> RegisterUser([FromBody] RegisterUserRequest userRequest)
        {
            try
            {
                
                if (!ModelState.IsValid)
                    return BadRequest(userRequest);

                return Ok(await _userService.Add(userRequest));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        //[EnableCors("AnotherPolicy")]
        [Route("FindByEmail")]
        public async Task<ActionResult<RegisterUserResponse>> FindByEmail(string email)
        {
            try
            {

                //if (!ModelState.IsValid)
                //    return BadRequest(userRequest);

                return Ok(await _userService.FindByEmail(email));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
