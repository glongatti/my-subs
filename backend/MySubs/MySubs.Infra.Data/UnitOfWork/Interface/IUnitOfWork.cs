using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Data.UnitOfWork.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        //TO-DO ARRUMAR
        //IHistoricRepository HistoricRepository { get; set; }
        //IOriginAndDestinyRepository OriginAndDestinyRepository { get; set; }
        //IDayPeriodRepository DayPeriodRepository { get; set; }
        //IDaysWeekRepository DaysWeekRepository { get; set; }
        //IWeeksMonthRepository WeeksMonthRepository { get; set; }
        bool Commit();
        IDisposable CreateContext(string connectionString);
        string GetConnection();
        IUnitOfWork Create(string connectionString);

        bool IsWowDisposed();
    }
}
