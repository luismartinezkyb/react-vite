import {createContext, useEffect, useState} from 'react'

export const TaskContext = createContext()

export default function TaskContextProvider(props) {
    const data = [
        {id:0, title: "hola1", description:"Nueva Description1"},
        {id:1, title: "hola2", description:"Nueva Description2"},
        {id:2, title: "hola3", description:"Nueva Description3"}    
    ]


    const [tasks, setTasks] = useState([])

    const createTask = (title, description)=>{
    let id = tasks.length;
    setTasks([...tasks, {
        id, title, description
    }]);

    }

    const deleteTask = (id)=>{
    setTasks(tasks.filter(t=>t.id !== id));
    }

    useEffect(() => {
        setTasks(data)
    }, [])
    
    return (
        <TaskContext.Provider value={{
            tasks, deleteTask, createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
