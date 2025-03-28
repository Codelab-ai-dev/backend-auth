import { body, param } from 'express-validator';
import { Role } from '@prisma/client';

export const createUserValidator = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('El nombre de usuario debe tener entre 3 y 30 caracteres')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('El nombre de usuario solo puede contener letras, números y guiones bajos'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Debe proporcionar un email válido')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula'),
  
  body('role')
    .optional()
    .isIn(Object.values(Role))
    .withMessage(`El rol debe ser ${Object.values(Role).join(' o ')}`)
];

export const updateUserValidator = [
  param('id')
    .isInt()
    .withMessage('El ID debe ser un número entero'),
  
  body('username')
    .optional()
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('El nombre de usuario debe tener entre 3 y 30 caracteres')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('El nombre de usuario solo puede contener letras, números y guiones bajos'),
  
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Debe proporcionar un email válido')
    .normalizeEmail(),
  
  body('role')
    .optional()
    .isIn(Object.values(Role))
    .withMessage(`El rol debe ser ${Object.values(Role).join(' o ')}`)
];

export const userIdValidator = [
  param('id')
    .isInt()
    .withMessage('El ID debe ser un número entero')
];
