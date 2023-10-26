import { useState } from "react"

export const Form = ({ addToDo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        { task.length && addToDo(task) }
        setTask('')
    }

    const handleChange = e => {
        setTask(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Asignar nueva tarea" value={task} onChange={handleChange} className="bg-indigo-900 m-2" />
            <button type='submit'>Agregar</button>
        </form>
    )
}