import { useState } from "react"

export const Edit = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault()
        {value.length && editToDo(value, task.id)}
        setValue('')
    }

    const handleChange = e => {
        setValue(e.target.value)
    } 

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nuevo nombre" value={value} onChange={handleChange} className="bg-indigo-900 m-2"/>
            <button type='submit'>Cambiar</button>
        </form>
    )
}