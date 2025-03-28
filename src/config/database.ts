import prisma from '../lib/prisma';

export const testConnection = async (): Promise<boolean> => {
  try {
    await prisma.$connect();
    console.log('Conexión exitosa a PostgreSQL con Prisma');
    return true;
  } catch (err) {
    console.error('Error conectando a PostgreSQL:', err instanceof Error ? err.message : err);
    return false;
  }
};
