const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");

const router = express.Router();
const routeOneController = require("../controllers/routeOne.controller");

// router.param("id", routeOneController.checkId);


/**
 * @swagger
 * components: 
 *  schemas: 
 *    User: 
 *      type: object
 *      required: 
 *        - name
 *        - surname
 *      properties: 
 *        _id: 
 *          type: string
 *          description: auto generated ids 
 *        name: 
 *          type: string
 *          description: name of the user 
 *        surname: 
 *          type: string
 *          description: surname of the user 
 *      example: 
 *        _id: 768da6ad8d5a
 *        name: AABCD
 *        surname: PORE
 *          
*/

/**
 * @swagger
 * tags: 
 *  name: Users
 *  description: User management apis
 */

/**
 * @swagger
 * /: 
 *  get: 
 *    summary: Get all users
 *    tags: [Users]
 *    responses: 
 *      200: 
 *        description: The list of users
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/User'
*/

router.route("/").get(routeOneController.getRouteOne);


/**
 * @swagger
 * /: 
 *  post: 
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json: 
 *          schema: 
 *            type: object
 *            required: 
 *              - name
 *              - surname
 *            properties: 
 *              name: 
 *                type: string
 *              surname: 
 *                type: string
 *          example: 
 *            name: AABCD
 *            surname: PORE
 *    responses: 
 *      200: 
 *        description: Details of the newly created User
 *        content: 
 *          application/json: 
 *            schema: 
 *              $ref: '#/components/schemas/User'
*/

router.route("/").post(routeOneController.postRouteOne);

/**
 * @swagger
 * /{id}: 
 *  get: 
 *    summary: Get a user by id
 *    tags: [Users]
 *    parameters: 
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: user id
 *    responses: 
 *      200: 
 *        description: The user by id
 *        content: 
 *          application/json:
 *            schema: 
 *                $ref: '#/components/schemas/User'
 *      
*/

router.route("/:id").get(routeOneController.getRouteOneId);

module.exports = router;
