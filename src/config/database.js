const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Función para probar la conexión
const testConnection = async () => {
  try {
    await prisma.$connect();
    console.log('Conexión exitosa a PostgreSQL con Prisma');
    return true;
  } catch (err) {
    console.error('Error conectando a PostgreSQL:', err.message);
    return false;
  }
};

module.exports = {
  prisma,
  testConnection
};
