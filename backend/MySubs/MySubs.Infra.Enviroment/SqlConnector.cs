using MySubs.Infra.Data.Contesxt.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Enviroment
{
    public class SqlConnector
    {
        public string Schema { get; protected set; }
        public string ConnectionString { get; protected set; }

        public static AppSettings Create(string schema, string connectionString)
        {
            return new AppSettings
            {
                ConnectionString = connectionString,
                Schema = schema,
            };
        }
    }
}
