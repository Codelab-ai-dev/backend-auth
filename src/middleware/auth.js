const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');

exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido' });
      }

      // Verificar que el usuario existe en la base de datos
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { id: true }
      });

      if (!user) {
        return res.status(403).json({ message: 'Usuario no encontrado' });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en la autenticación', error: error.message });
  }
};
