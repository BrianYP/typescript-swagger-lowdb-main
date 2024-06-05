import {Router} from "express"; //Esta me va a permitir inicializar un objeto
import {getTasks, createTask, getTaks, deleteTask, updateTask, count} from '../controllers/task.controller'


const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Identificador único generado automáticamente para la tarea
 *        name:
 *          type: string
 *          description: Nombre de la tarea
 *        description:
 *          type: string
 *          description: Descripción de la tarea
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: Mi primera tarea
 *        description: Tengo que hacer algo
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Mensaje para la tarea no encontrada
 *      example:
 *        msg: La tarea no se encontró
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: Identificador de la tarea
 */

/**
 * @swagger
 * tags:
 *  name: Tareas
 *  description: Punto final de tareas
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Devuelve una lista de tareas
 *    tags: [Tareas]
 *    responses:
 *      200:
 *        description: Lista de tareas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */

router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Obtener el número total de tareas
 *    tags: [Tareas]
 *    responses:
 *      200:
 *        description: Número total de tareas
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 15
 *
 */
router.get("/tasks/count", count);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Crear una nueva tarea
 *    tags: [Tareas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: La tarea se creó correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Error del servidor
 *
 */
router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Obtener una tarea por su identificador
 *    tags: [Tareas]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: La tarea encontrada
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: La tarea no se encontró
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 */
router.get("/tasks/:id", getTaks);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Eliminar una tarea por su identificador
 *    tags: [Tareas]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: La tarea se eliminó
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: La tarea no se encontró
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Actualizar una tarea por su identificador
 *    tags: [Tareas]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: La tarea actualizada
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: La tarea no se encontró
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 * */


router.get('/tasks', getTasks)//Devolver todas las tareas

router.get('/tasks/count', count)//total de tareas en la bds

router.post('/tasks', createTask)//poder Crear Tareas

router.get('/tasks/:id', getTaks)//pasar tarea y id para pasar una unica tarea

router.delete('/tasks/:id', deleteTask)//eliminar una unica tarea

router.put('/tasks/:id',updateTask)//actualizar

export default router