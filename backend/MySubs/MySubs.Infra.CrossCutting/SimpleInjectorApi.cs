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

            //services.AddTransient(typeof(IOriginAndDestinyService), typeof(OriginAndDestinyService));
            //services.AddTransient(typeof(IOriginAndDestinyRepository), typeof(OriginAndDestinyRepository));

            //services.AddTransient(typeof(IDayPeriodService), typeof(DayPeriodService));
            //services.AddTransient(typeof(IDayPeriodRepository), typeof(DayPeriodRepository));

            //services.AddTransient(typeof(IDaysWeekService), typeof(DaysWeekService));
            //services.AddTransient(typeof(IDaysWeekRepository), typeof(DaysWeekRepository));

            //services.AddTransient(typeof(IWeeksMonthService), typeof(WeeksMonthService));
            //services.AddTransient(typeof(IWeeksMonthRepository), typeof(WeeksMonthRepository));

            services.AddScoped<IUnitOfWork, UnitOfWork>(service => new UnitOfWork(appSettings.ConnectionString));
            services.AddScoped(typeof(IRepository<>), typeof(AbstractRepository<>));
        }
    }
}

