using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using SimpleInjector;
using SimpleInjector.Lifestyles;
using System;
using MySubs.Infra.CrossCutting;
using MySubs.Infra.Data.Contesxt.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace MySubs.API
{
    public class Startup
    {
        private Container container = new Container();
        public IConfigurationRoot Configuration { get; }
        readonly string MyAllowSpecificOrigins = "AnotherPolicy";

        public Startup(IHostingEnvironment env)
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(_ => Configuration);

            InjectCors(services);
            InjectAuthentication(services);
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new OpenApiInfo { Title = "My Subs", Version = "v1" }); });
            services.AddSingleton<IConfiguration>(Configuration);

            var appSettings = new AppSettings();

            Configuration.GetSection("DBInfo").Bind(appSettings);
            #region Simple injector

            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();


            SimpleInjectorApi.Register(services, appSettings);

            #endregion
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(60);//You can set Time   
            });

            services.AddHttpContextAccessor();

            services.AddOptions();
        }
        private void InjectCors(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("https://localhost:44375",
                                        "http://mysubs.azurewebsites.net",
                                        "https://localhost:3000")
                                        .AllowAnyOrigin()
                                        .AllowCredentials()
                                        .AllowAnyHeader()
                                        .AllowAnyMethod();
                });
            });
        }

        private void InjectAuthentication(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
             .AddJwtBearer(options =>
             {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuer = false,
                     ValidIssuer = Configuration["Authentication:Issuer"],

                     ValidateAudience = false,
                     ValidAudience = Configuration["Authentication:Audience"],

                     ValidateIssuerSigningKey = true,
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Authentication:SecretKey"])),

                     RequireExpirationTime = true,
                     ValidateLifetime = true,
                     ClockSkew = TimeSpan.Zero
                 };
             });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Viagens de Grátis!!!");
            });

            app.UseCors(MyAllowSpecificOrigins);
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseSession();
            app.UseMvc();
        }
    }
}
