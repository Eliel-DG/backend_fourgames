// app.js or index.js

import express from 'express';
import dbConnection from './config/db.js';
import { router as gamesRouter } from './routes/gamesRoute.js';
import { router as userRouter } from './routes/userRoute.js';

const api = express();
const port = 18061;

api.use(express.json());

try {
    console.log("Status -> Trying to connect to the database....");
    await dbConnection.authenticate();
    console.log("Status -> Connection to the database successful....");
    console.log("Status -> Synchronizing the database with existing objects");
    await dbConnection.sync();
    console.log("Status -> The database is ready for operations");
} catch (error) {
    console.error("Errors occurred while trying to connect to the database");
    console.error(error);
}

api.use('/games', gamesRouter); 
api.use('/users', userRouter); 

api.listen(port, () => {
    console.log(`API started on http://localhost:${port}`);
});
