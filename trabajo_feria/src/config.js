import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,

  dbUser: process.env.DB_USER || "sqlserver",
  dbPassword: process.env.DB_PASSWORD || "Gilberto2001",
  dbServer: process.env.DB_SERVER || "34.66.121.60",
  dbDatabase: process.env.DB_DATABASE || "db_transaccion",
};
