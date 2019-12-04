using MySubs.Infra.Data.UnitOfWork.Interface;
using System;
using System.Data;
using System.Data.SqlClient;

namespace MySubs.Infra.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private string rawConnection;
        private bool _disposed;

        private IDbConnection _connection;
        private IDbTransaction _transaction;

        //TO-DO ARRUMAR
        //private IHistoricRepository _historicRepository;
        //private IOriginAndDestinyRepository _originAndDestiny;
        //private IDayPeriodRepository _dayPeriodRepository;
        //private IDaysWeekRepository _daysWeekRepository;
        //private IWeeksMonthRepository _weeksMonthRepository;

        //public IHistoricRepository HistoricRepository
        //{
        //    get => _historicRepository == null || _historicRepository.IsConnected() ? (_historicRepository = new HistoricRepository(_transaction)) : _historicRepository;
        //    set => _historicRepository = value;
        //}
        //public IOriginAndDestinyRepository OriginAndDestinyRepository
        //{
        //    get => _originAndDestiny == null || _originAndDestiny.IsConnected() ? (_originAndDestiny = new OriginAndDestinyRepository(_transaction)) : _originAndDestiny;
        //    set => _originAndDestiny = value;
        //}

        //public IDayPeriodRepository DayPeriodRepository
        //{
        //    get => _dayPeriodRepository == null || _dayPeriodRepository.IsConnected() ? (_dayPeriodRepository = new DayPeriodRepository(_transaction)) : _dayPeriodRepository;
        //    set => _dayPeriodRepository = value;
        //}

        //public IDaysWeekRepository DaysWeekRepository
        //{
        //    get => _daysWeekRepository == null || _daysWeekRepository.IsConnected() ? (_daysWeekRepository = new DaysWeekRepository(_transaction)) : _daysWeekRepository;
        //    set => _daysWeekRepository = value;
        //}

        //public IWeeksMonthRepository WeeksMonthRepository
        //{
        //    get => _weeksMonthRepository == null || _weeksMonthRepository.IsConnected() ? (_weeksMonthRepository = new WeeksMonthRepository(_transaction)) : _weeksMonthRepository;
        //    set => _weeksMonthRepository = value;
        //}
        public UnitOfWork(string connectionString)
        {
            if (!string.IsNullOrEmpty(connectionString))
            {
                rawConnection = connectionString;
                _connection = new SqlConnection(connectionString);
                _connection.Open();
                _transaction = _connection.BeginTransaction();
            }
        }

        public string GetConnection()
        {
            return rawConnection;
        }

        public IDisposable CreateContext(string connectionString)
        {
            return Create(connectionString);
        }

        public IUnitOfWork Create(string connectionString)
        {
            return new UnitOfWork(connectionString);
        }

        public bool IsWowDisposed()
        {
            return _disposed == true || _connection == null || _transaction == null;
        }

        public bool Commit()
        {
            try
            {
                _transaction.Commit();
            }
            catch
            {
                _transaction.Rollback();
                throw;
            }
            finally
            {
                _transaction.Dispose();
                _transaction = _connection.BeginTransaction();
                resetRepositories();
            }

            return true;
        }

        private void resetRepositories()
        {
            //TO-DO ARRUMAR
            //_historicRepository = null;
            //_originAndDestiny = null;
            //_dayPeriodRepository = null;
            //_daysWeekRepository = null;
            //_weeksMonthRepository = null;

        }

        public void Dispose()
        {
            dispose(true);
            GC.SuppressFinalize(this);
        }

        private void dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    if (_transaction != null)
                    {
                        _transaction.Dispose();
                        _transaction = null;
                    }
                    if (_connection != null)
                    {
                        _connection.Dispose();
                        _connection = null;
                    }
                }
                _disposed = true;
            }
        }

        ~UnitOfWork()
        {
            dispose(false);
        }

    }
}

