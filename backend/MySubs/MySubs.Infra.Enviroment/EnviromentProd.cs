using MySubs.Infra.Data.Contesxt.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Enviroment
{
    public class EnviromentProd
    {
        public AppSettings AppSettings { get; protected set; }

        public static EnviromentProd Create()
        {
            string schemaSQL = "instamoredb";
            string connectionStringSQL = "User ID=instamoreadmin;Password=jesussalva##1010;Host=mysql669.umbler.com;Port=41890;Database=instamoredb;default command timeout=360;";

            var connectorSQL = SqlConnector.Create(
                                                    schema: schemaSQL,
                                                    connectionString: connectionStringSQL
                                                  );

            return new EnviromentProd
            {
                AppSettings = connectorSQL
            };
        }
    }
}
