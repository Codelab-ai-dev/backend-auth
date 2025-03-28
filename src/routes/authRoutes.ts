import { Router, RequestHandler } from 'express';
import * as authController from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import { registerValidator, loginValidator } from '../validators/authValidators';

const router = Router();

// Rutas públicas
router.post(
  '/register',
  registerValidator,
  validateRequest as RequestHandler,
  authController.register as RequestHandler
);

router.post(
  '/login',
  loginValidator,
  validateRequest as RequestHandler,
  authController.login as RequestHandler
);

// Rutas protegidas
router.get(
  '/profile',
  authenticateToken as RequestHandler,
  authController.getProfile as RequestHandler
);

export default router;
