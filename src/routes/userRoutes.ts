import { Router, RequestHandler } from 'express';
import * as userController from '../controllers/userController';
import { authenticateToken } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import {
  createUserValidator,
  updateUserValidator,
  userIdValidator
} from '../validators/userValidators';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authenticateToken as RequestHandler);

// Obtener todos los usuarios
router.get('/', userController.getAllUsers as RequestHandler);

// Obtener un usuario por ID
router.get(
  '/:id',
  userIdValidator,
  validateRequest as RequestHandler,
  userController.getUserById as RequestHandler
);

// Crear un nuevo usuario
router.post(
  '/',
  createUserValidator,
  validateRequest as RequestHandler,
  userController.createUser as RequestHandler
);

// Actualizar un usuario
router.put(
  '/:id',
  updateUserValidator,
  validateRequest as RequestHandler,
  userController.updateUser as RequestHandler
);

// Eliminar un usuario
router.delete(
  '/:id',
  userIdValidator,
  validateRequest as RequestHandler,
  userController.deleteUser as RequestHandler
);

export default router;
