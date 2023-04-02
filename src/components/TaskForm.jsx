import React, {useState, Fragment, useContext} from 'react'
import { TaskContext } from '../context/TaskContext';
export default function TaskForm() {

    const {createTask} = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title, description)
        createTask(title, description)
        setDescription("");
        setTitle("");
    }
    return (
        <Fragment>
            <div className=' max-w-md mx-auto'>
                <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                    <h1 className='text-2x1 font-bold text-white mb-2'>Crea tu tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' placeholder='Title' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input className='bg-slate-300 p-3 w-full mb-2' placeholder='Description' type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>

                <button className='bg-indigo-500 px-3 hover:bg-indigo-400 text-white py-1'>Add</button>
                </form>
            </div>
            
        </Fragment>
    )
}
