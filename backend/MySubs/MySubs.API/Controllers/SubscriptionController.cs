using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Models.Request;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

namespace MySubs.API.Controllers
{
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
    }
}