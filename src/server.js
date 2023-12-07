import express from 'express';
import cors from 'cors'; // Importa el paquete cors
import dbConnection from './config/db.js';
import { router as gamesRouter } from './routes/gamesRoute.js';
import { router as userRouter } from './routes/userRoute.js';
import { router as requirementsRouter } from './routes/requirementsRoute.js';


// Importa tus módulos y paquetes necesarios

const api = express();
const port = 18061;

api.use(cors());
api.use(express.json());

try {
    console.log("Status -> Trying to connect to the database....");
    await dbConnection.authenticate();
    console.log("Status -> Connection to the database successful....");

    // Sincroniza la base de datos y fuerza la creación de tablas
    await dbConnection.sync({ force: false });
    
    console.log("Status -> The database is ready for operations");
} catch (error) {
    console.error("Errors occurred while trying to connect to the database");
    console.error(error);
}

api.use('/games', gamesRouter);
api.use('/users', userRouter);
api.use('/requirements', requirementsRouter);


api.listen(port, () => {
    console.log(`API started on http://localhost:${port}`);
});
