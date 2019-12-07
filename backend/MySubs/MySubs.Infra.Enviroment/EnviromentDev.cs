﻿using MySubs.Infra.Data.Contesxt.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Infra.Enviroment
{
    public class EnviromentDev
    {
        public AppSettings AppSettings { get; protected set; }

        public static EnviromentDev Create()
        {
            //string schemaSQL = "";
            //string connectionStringSQL = "DataSource=DESKTOP-E7VQJDV\\LOCAL;" +
            //                             "Initial Catalog=MySubs;" +
            //                             "Userid=sa;" +
            //                             "Password=legiao555;";
            string schemaSQL = "dbo";
            string connectionStringSQL = "Data Source=inovebuild.database.windows.net;Initial Catalog=MySubs;User ID=kamila;Password=Legiao555@";

            var connectorSQL = SqlConnector.Create(
                                                    schema: schemaSQL,
                                                    connectionString: connectionStringSQL
                                                  );


            return new EnviromentDev
            {
                AppSettings = connectorSQL
            };
        }
    }
}
