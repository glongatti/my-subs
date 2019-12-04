using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Data.Contesxt.Models
{
    public class AppSettings
    {
        public string Schema { get; set; }
        public string ConnectionString { get; set; }

        public static AppSettings Create()
        {
            return new AppSettings();
        }

        public static AppSettings Create(string schema, string connectionString)
        {
            return new AppSettings
            {
                Schema = schema,
                ConnectionString = connectionString
            };
        }
    }
}
