import {Handler} from 'express'
import {getConnection} from '../db';
import {nanoid} from 'nanoid';

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value()//obtener las tareas que esten guardadas en la base de datos.
    return res.json(data);
}

export const createTask: Handler = (req, res) =>{
    const{name, description} = req.body;

    const newTasks ={
        name, 
        description,
        id: nanoid()//generar id aleatorio
    };
    try {
        getConnection().get('tasks').push(newTasks).write();//Guardamos el dato de la tarea
        res.json(newTasks);

    } catch (error) {
        res.status(500).send(error);
    }
};

//Crearemos una funcion la cual nos permita llamar una tarea mediante su ID

export const getTaks: Handler = (req, res) =>{
    const tasksFound = getConnection().get('tasks').find({id: req.params.id}).value();//buscar la tarea
    if(!tasksFound)return res.status(404).json({msg: 'La tarea no fue encontrada'})

    res.json(tasksFound);
};

//Creamos la funcion que nos permita contar el numero de tareas
export const count: Handler = (req, res) =>{
    const tasksLength =getConnection().get('tasks').value().length;
    res.json(tasksLength);
};

//Crearemos la funcion que nos permita borrar una tarea mediante su ID
export const deleteTask: Handler = (req, res) =>{
    const tasksFound = getConnection().get('tasks').find({id: req.params.id}).value();//buscar la tarea
    if(!tasksFound)return res.status(404).json({msg: 'La tarea no fue encontrada'})

    const deletedTask = getConnection().get('tasks').remove({id: req.params.id}).write();
    res.json(deletedTask);
};

//La forma que tenemos de actualizar una tarea
export const updateTask: Handler = (req, res) =>{
    const tasksFound = getConnection().get('tasks').find({id: req.params.id}).value();//buscar la tarea
    if(!tasksFound)return res.status(404).json({msg: 'La tarea no fue encontrada'})

    const updatedTask = getConnection().get('tasks').find({id: req.params.id}).assign(req.body).write();//para actualizar la tarea
    res.json(updatedTask);
};