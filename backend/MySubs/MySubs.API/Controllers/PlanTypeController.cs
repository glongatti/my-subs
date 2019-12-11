using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySubs.Domain.Models.Response;
using MySubs.Domain.Services.Interfaces;

namespace MySubs.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanTypeController : ControllerBase
    {
        private readonly IPlanTypeService _planTypeService;
        public PlanTypeController(IPlanTypeService planTypeService)
        {
            _planTypeService = planTypeService;
        }
        [HttpGet]
        [EnableCors("AnotherPolicy")]
        [Route("GetAllPlanType")]
        public async Task<ActionResult<PlanTypeResponse>> GetAllPlanType()
        {
            try
            {

                return Ok(await _planTypeService.FindAll());
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}