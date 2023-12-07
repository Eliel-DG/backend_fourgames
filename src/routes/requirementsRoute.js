          // routes/requirementsRoute.js
import Express from 'express';
import {
  createRequirements,
  getAllRequirements,
  // Importa las funciones para las demás operaciones CRUD
} from '../controllers/requirementsController.js';

const router = new Express.Router();

router.post('/create/newRequirements', createRequirements);
router.get('/findAllRequirements', getAllRequirements);
// Agrega las rutas para las demás operaciones CRUD

export { router };
