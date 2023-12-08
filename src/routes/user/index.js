const express = require("express");
const createUser = require("../../services/user/createUser");
const login = require("../../services/user/login");
const getUser = require("../../services/user/getUser");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con usuarios
 * /user/usuarios:
 *   post:
 *     tags:
 *       - Users
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                 userCreated:
 *                   type: object
 *                   description: Detalles del usuario creado
 *       400:
 *         description: Error en los datos proporcionados o usuario existente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error interno del servidor al crear un usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 */

router.post("/usuarios", (req, res) => {
  createUser(req, res);
});

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con usuarios
 * /user/login:
 *   post:
 *     tags:
 *       - Users
 *     summary: Iniciar sesión
 *     description: Verifica las credenciales del usuario para iniciar sesión.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Sesión iniciada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de autenticación JWT
 *                 userName:
 *                   type: string
 *                   description: Nombre de usuario
 *       400:
 *         description: Error en los datos proporcionados o credenciales incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error interno del servidor al intentar iniciar sesión
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 */

router.post("/login", (req, res) => {
  login(req, res);
});

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con usuarios
 * /user/usuario:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener información del usuario
 *     description: Obtiene la información del usuario autenticado mediante el token.
 *     responses:
 *       200:
 *         description: Información del usuario obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: Detalles del usuario
 *                   properties:
 *                     // Aquí puedes listar las propiedades del usuario obtenido, por ejemplo:
 *                     user_id:
 *                       type: integer
 *                       description: ID del usuario
 *                     email:
 *                       type: string
 *                       description: Correo electrónico del usuario
 *                     name:
 *                       type: string
 *                       description: Nombre del usuario
 *
 *       401:
 *         description: Token no encontrado o incorrecto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error interno del servidor al obtener la información del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 */

router.get("/usuario", (req, res) => {
  getUser(req, res);
});

module.exports = router;
