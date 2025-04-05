# Backend Authentication API

Una API RESTful de autenticación construida con Node.js, Express, TypeScript y PostgreSQL. Proporciona endpoints seguros para registro de usuarios, autenticación y gestión de usuarios.

## 🚀 Características

- Autenticación completa con JWT
- Registro y gestión de usuarios
- Validación de datos con express-validator
- Base de datos PostgreSQL con Prisma ORM
- CORS configurado para seguridad
- TypeScript para tipado estático
- Rutas protegidas

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- PostgreSQL
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd backend-auth
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```
Edita el archivo `.env` con tus configuraciones:
```env
PORT=3000
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db"
JWT_SECRET="tu_secret_key"
FRONTEND_URL="http://localhost:3001"
```

4. Ejecuta las migraciones de Prisma:
```bash
npx prisma migrate dev
```

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

## 🛣️ Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/logout` - Cierre de sesión

### Usuarios (Protegido)
- `GET /api/users/profile` - Obtener perfil del usuario
- `PUT /api/users/profile` - Actualizar perfil

## 🔒 Seguridad

- Contraseñas hasheadas con bcrypt
- Tokens JWT para autenticación
- Validación de datos en endpoints
- Headers CORS configurados
- Rate limiting para prevenir ataques

## 🛠️ Construido con

- [Node.js](https://nodejs.org/) - Runtime de JavaScript
- [Express](https://expressjs.com/) - Framework web
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Prisma](https://www.prisma.io/) - ORM para bases de datos
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional
- [JWT](https://jwt.io/) - JSON Web Tokens para autenticación

## 📄 Licencia

Este proyecto está bajo la Licencia ISC - mira el archivo [LICENSE](LICENSE) para detalles
