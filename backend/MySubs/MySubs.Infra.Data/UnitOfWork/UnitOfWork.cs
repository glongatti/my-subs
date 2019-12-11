using MySubs.Infra.Data.Repository;
using MySubs.Infra.Data.Repository.Interfaces;
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
        private IUserRepository _userRepository;
        private IPlanTypeRepository _planTypeRepository;
        private IServiceRepository _serviceRepository;
        private ISubscriptionRepository _subscriptionRepository;

        public IUserRepository UserRepository
        {
            get => _userRepository == null || _userRepository.IsConnected() ? (_userRepository = new UserRepository(_transaction)) : _userRepository;
            set => _userRepository = value;
        }
        public IPlanTypeRepository PlanTypeRepository
        {
            get => _planTypeRepository == null || _planTypeRepository.IsConnected() ? (_planTypeRepository = new PlanTypeRepository(_transaction)) : _planTypeRepository;
            set => _planTypeRepository = value;
        }

        public IServiceRepository ServiceRepository
        {
            get => _serviceRepository == null || _serviceRepository.IsConnected() ? (_serviceRepository = new ServiceRepository(_transaction)) : _serviceRepository;
            set => _serviceRepository = value;
        }
        public ISubscriptionRepository SubscriptionRepository
        {
            get => _subscriptionRepository == null || _subscriptionRepository.IsConnected() ? (_subscriptionRepository = new SubscriptionRepository(_transaction)) : _subscriptionRepository;
            set => _subscriptionRepository = value;
        }

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
            _userRepository = null;
            _planTypeRepository = null;
            _serviceRepository = null;
            _subscriptionRepository = null;
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

