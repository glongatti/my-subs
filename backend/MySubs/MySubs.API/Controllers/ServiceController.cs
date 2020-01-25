using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

namespace MySubs.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceService _serviceService;
        public ServiceController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }
        [HttpGet]
        [EnableCors("AnotherPolicy")]
        [Route("GetAllServices")]
        public async Task<ActionResult<ServiceResponse>> GetAllServices()
        {
            try
            {

                return Ok(await _serviceService.FindAll());
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}