using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

namespace MySubs.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [AllowAnonymous]
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

        [AllowAnonymous]
        [HttpPost]
        //[EnableCors("AnotherPolicy")]
        [Route("RecoverPassword")]
        public async Task<ActionResult<RecoverPasswordResponse>> RecoverPassword(string email)
        {
            try
            {

                if (String.IsNullOrEmpty(email))
                    return null;
                    ///return BadRequest(userRequest);

                return Ok(await _userService.RecoverPassword(email));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        //[EnableCors("AnotherPolicy")]
        [Route("FindByEmail")]
        public async Task<ActionResult<CheckMailUserResponse>> FindByEmail(string email)
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
        [HttpPost]
        //[EnableCors("AnotherPolicy")]
        [Route("UpdateUser")]
        public async Task<ActionResult<UpdateUserResponse>> UpdateUser(UpdateUserRequest user)
        {
            try
            {

                if (!ModelState.IsValid)
                    return BadRequest(user);

                return Ok(await _userService.Update(user));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
