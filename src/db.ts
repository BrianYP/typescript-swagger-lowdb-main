import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync' //importacion de configuraciones para el lowdb

type Task = {
    id: string
    name: string
    description: string
}

type Schema = {
    tasks: Task[]
}

let db: lowdb.LowdbSync<Schema>;

export const createConnection = () => {//iniciar la conexion con la base de datos para las consultas
    const adapter = new FileSync<Schema>('db.json')//crear y guardar archivos en el archivo db.json
    db = lowdb(adapter)
    db.defaults({ tasks: []}).write();
}

export const getConnection = () => db;

