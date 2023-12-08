const express = require("express");
const createProduct = require("../../services/product/createProduct");
const getProducts = require("../../services/product/getProducts");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operaciones relacionadas con productos
 * /product/product:
 *   post:
 *     tags:
 *       - Products
 *     summary: Crea un nuevo producto
 *     description: Crea un nuevo producto con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del producto
 *               price:
 *                 type: number
 *                 description: Precio del producto
 *               description:
 *                 type: string
 *                 description: Descripción del producto
 *               stock:
 *                 type: number
 *                 description: Stock disponible del producto
 *               img_url:
 *                 type: string
 *                 description: URL de la imagen del producto
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                 productCreated:
 *                   type: object
 *                   description: Detalles del producto creado
 *       400:
 *         description: Error al crear el producto
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               description: Mensaje de error
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 */

router.post("/product", (req, res) => {
  createProduct(req, res);
});

/**
 * @swagger
 * /product/products:
 *   get:
 *     tags:
 *       - Products
 *     summary: Obtiene todos los productos
 *     description: Obtiene una lista de todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del producto
 *                   name:
 *                     type: string
 *                     description: Nombre del producto
 *                   price:
 *                     type: number
 *                     description: Precio del producto
 *                   description:
 *                     type: string
 *                     description: Descripción del producto
 *                   stock:
 *                     type: number
 *                     description: Stock disponible del producto
 *                   img_url:
 *                     type: string
 *                     description: URL de la imagen del producto
 *       500:
 *         description: Error interno del servidor al obtener los productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno al obtener los productos
 */

router.get("/products", (req, res) => {
  getProducts(req, res);
});

module.exports = router;
