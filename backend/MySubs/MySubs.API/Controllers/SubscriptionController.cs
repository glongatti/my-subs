using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Common;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

namespace MySubs.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISubscriptionService _subService;
        public SubscriptionController(ISubscriptionService subService)
        {
            _subService = subService;
        }

        [HttpPost]
        [EnableCors("AnotherPolicy")]
        [Route("RegisterSub")]
        public async Task<ActionResult<RegisterSubResponse>> RegisterUser([FromBody] RegisterSubRequest subRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(subRequest);
                return Ok(await _subService.Add(subRequest));
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpPost]
        [EnableCors("AnotherPolicy")]
        [Route("SubscriptionFindByIdUser")]
        public async Task<ActionResult<ListSubscriptionResponse>> SubscriptionFindByIdUser(long id)
        {
            try
            {
                //if (id < 0)
                //    return BadRequest();

                return Ok(await _subService.SubscriptionByIdUser(id));
            }
            catch (Exception ex)
            {
                throw;
            }


        }
        [HttpPost]
        [EnableCors("AnotherPolicy")]
        [Route("DeleteSub")]
        public async Task<ActionResult<ResponseResult>> DeleteSub(long id)
        {
            try
            {
                if (id < 0)
                    return BadRequest();

                return Ok(await _subService.DeleteSub(id));
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}