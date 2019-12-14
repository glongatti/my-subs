using MySubs.Domain.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Data.Repository.Interfaces
{
    public interface IPlanTypeRepository
    {
        IEnumerable<PlanType> FindAll();
        bool IsConnected();
    }
}
