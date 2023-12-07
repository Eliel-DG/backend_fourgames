/*import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });

const dbConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect:"mysql"
    }
)

export default dbConnection; 
*/

 
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });

const dbConnection = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Deshabilita la conexión SSL estricta
        },
    },
});

export default dbConnection;
