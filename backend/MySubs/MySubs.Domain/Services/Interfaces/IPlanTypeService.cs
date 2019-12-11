using MySubs.Domain.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MySubs.Domain.Services.Interfaces
{
    public interface IPlanTypeService
    {
        Task<IEnumerable<PlanTypeResponse>> FindAll();
    }
}
