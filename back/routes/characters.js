/*
    Characters Routes
    /api/character
*/
const { Router } = require('express');
const { createCharacter,
    getCharacterById,
    getCharacters,
    deleteCharacterById,
    updateCharacterById,
    generatePDF } = require('../controllers/characters')
const router = Router();



/**
 * @swagger
 * tags:
 *   name: Characters
 *   description: API para gestionar personajes
 */

/**
 * @swagger
 * /api/character:
 *   get:
 *     summary: Obtiene todos los personajes
 *     tags: [Characters]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Nombre del personaje
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Alive, Dead, unknown]
 *         description: Estado del personaje (Alive, Dead, unknown)
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *           enum: [Female, Male, Genderless, unknown]
 *         description: Género del personaje (Female, Male, Genderless, unknown)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Número de página para paginación (por defecto 1)
 *     responses:
 *       200:
 *         description: Lista de personajes obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */

router.get('/', getCharacters);

/**
 * @swagger
 * /api/character:
 *   post:
 *     summary: Crea un nuevo personaje
 *     tags: [Characters]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Alive, Dead, unknown]
 *               species:
 *                 type: string
 *               type:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [Female, Male, Genderless, unknown]
 *               image:
 *                 type: string
 *                 format: binary
 *               episodes:
 *                 type: array
 *                 items:
 *                   type: string
 *               created:
 *                 type: string
 *                 format: date-time
 *               origin:
 *                 type: string
 *               location:
 *                 type: string
 *             required:
 *               - name
 *               - species
 *               - type
 *               - image
 *               - episodes
 *               - created
 *     responses:
 *       201:
 *         description: Personaje creado exitosamente
 *       400:
 *         description: Solicitud inválida
 *       500:
 *         description: Error del servidor
 */

router.post('/', createCharacter);


/**
 * @swagger
 * /api/character/{id}:
 *   get:
 *     summary: Obtiene un personaje por su ID
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     responses:
 *       200:
 *         description: Personaje obtenido exitosamente
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error del servidor
 */

router.get('/:id', getCharacterById);

/**
 * @swagger
 * /api/character/{id}:
 *   put:
 *     summary: Actualiza un personaje por su ID
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Alive, Dead, unknown]
 *               species:
 *                 type: string
 *               type:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [Female, Male, Genderless, unknown]
 *               image:
 *                 type: string
 *                 format: binary
 *               episodes:
 *                 type: array
 *                 items:
 *                   type: string
 *               created:
 *                 type: string
 *                 format: date-time
 *               origin:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *               location:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *             required:
 *               - name
 *               - species
 *               - type
 *     responses:
 *       200:
 *         description: Personaje actualizado exitosamente
 *       400:
 *         description: Solicitud inválida
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error del servidor
 */

router.put('/:id', updateCharacterById);


/**
 * @swagger
 * /api/character/{id}:
 *   delete:
 *     summary: Elimina un personaje por su ID
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     responses:
 *       204:
 *         description: Personaje eliminado exitosamente
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error del servidor
 */

router.delete('/:id', deleteCharacterById);

/**
 * @swagger
 * /api/character/pdf/{id}:
 *   get:
 *     summary: Genera un PDF del personaje por su ID
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del personaje
 *     produces:
 *       - application/pdf
 *     responses:
 *       200:
 *         description: PDF generado exitosamente
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error del servidor
 */

router.get('/pdf/:id', generatePDF);

module.exports = router;