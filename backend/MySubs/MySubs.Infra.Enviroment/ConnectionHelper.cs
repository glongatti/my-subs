using MySubs.Infra.Data.Contesxt.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Enviroment
{
    public static class ConnectionHelper
    {
        public static Enviroment ENVIROMENT_FLAG = Enviroment.DEV;
        public static AppSettings AppSettings { get; set; }

        public static string ApiEndpoint { get; set; }

        public static void Create(bool createSqlSchema = true, bool createMongoSchema = true)
        {
            switch (ENVIROMENT_FLAG)
            {
                case Enviroment.DEV:
                    {
                        var conDev = EnviromentDev.Create();
                        AppSettings = createSqlSchema ? conDev.AppSettings : AppSettings.Create();
                        //ApiEndpoint = "http://192.168.0.153:8008";
                    }
                    break;
                case Enviroment.PROD:
                    {
                        var conProd = EnviromentProd.Create();
                        AppSettings = createSqlSchema ? conProd.AppSettings : AppSettings.Create();
                        //ApiEndpoint = "http://192.168.0.149:8008";
                    }
                    break;
                case Enviroment.LOCAL:
                    {
                        var conDev = EnviromentLocal.Create();
                        AppSettings = createSqlSchema ? conDev.AppSettings : AppSettings.Create();
                        //ApiEndpoint = "https://localhost:44312";
                    }
                    break;
            }
        }
    }
}
