import express  from 'express'
import cors from 'cors'
import morgan from 'morgan'

//Swagger
import swaggerUI from 'swagger-ui-express'
import swagerJsDoc from 'swagger-jsdoc';
import {options} from './swaggerOptions';

//importacion de el archivo de rutas
import taskRoutes from './routes/tasks.routes';

const app = express()
app.set('port', process.env.PORT || 3000);//Creacion de variable para usar como conexion con el servidor

app.use(cors())//para comunicarse con otros servidores
app.use(morgan('dev'))//ver las peticiones que van llegando
app.use(express.json())//tratar con los formatos que lleguen al servidor
app.use(taskRoutes)//usamos la importacion de las rutas

//configuraciones de swagger
const specs = swagerJsDoc(options)

//ruta de swagger
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));//asignamos las configuraciones propias de nuestro servidor.

export default app