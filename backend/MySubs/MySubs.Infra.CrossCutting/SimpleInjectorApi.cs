using Microsoft.Extensions.DependencyInjection;
using MySubs.Domain.Services;
using MySubs.Domain.Services.Interfaces;
using MySubs.Infra.Data.Contesxt.Models;
using MySubs.Infra.Data.Repository;
using MySubs.Infra.Data.Repository.Interfaces;
using MySubs.Infra.Data.UnitOfWork;
using MySubs.Infra.Data.UnitOfWork.Interface;

namespace MySubs.Infra.CrossCutting
{
    public static class SimpleInjectorApi
    {
        public static void Register(IServiceCollection services, AppSettings appSettings)
        {
            //TO-DO ARRUMAR
            services.AddTransient(typeof(IUserService), typeof(UserService));
            services.AddTransient(typeof(IUserRepository), typeof(UserRepository));


            services.AddTransient(typeof(IPlanTypeService), typeof(PlanTypeService));
            services.AddTransient(typeof(IPlanTypeRepository), typeof(PlanTypeRepository));

            services.AddTransient(typeof(IServiceService), typeof(ServiceService));
            services.AddTransient(typeof(IServiceRepository), typeof(ServiceRepository));

            services.AddTransient(typeof(ISubscriptionService), typeof(SubscriptionService));
            services.AddTransient(typeof(ISubscriptionRepository), typeof(SubscriptionRepository));

            services.AddScoped<IUnitOfWork, UnitOfWork>(service => new UnitOfWork(appSettings.ConnectionString));
            services.AddScoped(typeof(IRepository<>), typeof(AbstractRepository<>));
        }
    }
}

