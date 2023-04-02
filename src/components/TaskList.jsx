import React, {useState, useContext} from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

export default function TaskList() {
    const {tasks, deleteTask} = useContext(TaskContext);
    if(tasks.length===0){
        return <h1 className='text-white text-4xl font-bold mx-auto text-center'>No hay tareas aun</h1>;
    }
    
    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map(task => {
                return <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
            })}
        </div>
    )
}
