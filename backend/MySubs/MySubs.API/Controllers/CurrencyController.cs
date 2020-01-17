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
    public class CurrencyController : ControllerBase
    {
        private readonly ICurrencyService _currencyService;
        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }
        [HttpPost]
        [EnableCors("AnotherPolicy")]
        [Route("RegisterCurrency")]
        public async Task<ActionResult<IEnumerable<long>>> RegisterCurrency([FromBody] IEnumerable<RegisterCurrencyRequest> lst)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(lst);

                return Ok(await _currencyService.InsertMany(lst));
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpGet]
        [EnableCors("AnotherPolicy")]
        [Route("GetAllCurrency")]
        public async Task<ActionResult<CurrencyResponse>> GetAllCurrency()
        {
            try
            {

                return Ok(await _currencyService.FindAll());
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}