import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

interface JwtPayload {
  userId: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Token no proporcionado' });
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, async (err, decoded) => {
      if (err) {
        res.status(403).json({ message: 'Token inválido' });
        return;
      }

      const payload = decoded as JwtPayload;

      try {
        // Verificar que el usuario existe en la base de datos
        const user = await prisma.user.findUnique({
          where: { id: payload.userId },
          select: { id: true }
        });

        if (!user) {
          res.status(403).json({ message: 'Usuario no encontrado' });
          return;
        }

        req.user = payload;
        next();
      } catch (dbError) {
        res.status(500).json({ 
          message: 'Error en la base de datos', 
          error: dbError instanceof Error ? dbError.message : 'Error desconocido' 
        });
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error en la autenticación', 
      error: error instanceof Error ? error.message : 'Error desconocido' 
    });
  }
};
