import { useState } from "react"
import { Form } from "./Form"
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from "./ToDo";
import { Edit } from "./Edit";
uuidv4();


export const Container = () => {
    const [toDos, setToDos] = useState([])


    const addToDo = toDo => {
        setToDos([...toDos, { id: uuidv4(), task: toDo, completed: false, isEditing: false }])
    }

    const toggleComplete = id => {
        setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo))
    }

    const deleteToDo = id => {
        setToDos(toDos.filter(toDo => toDo.id !== id))
    }

    const editToDo = id => {
        setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, isEditing: !toDo.isEditing } : toDo))
    }

    const editTask = (task, id) => {
        setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, task, isEditing: !toDo.isEditing } : toDo))
    }

    const sortedToDos = toDos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

    return (
        <div>
            <h1 className="text-3xl text-center p-5 font-bold text-indigo-900 dark:text-white">Tus tareas</h1>

            <div className="bg-indigo-900 rounded max-w-[600px] lg:m-auto m-5 lg:mt-10 font-mono text-white text-center pb-1 dark:bg-indigo-900">
            <Form addToDo={addToDo} />


                {!sortedToDos.length ? <h1 className="p-10">Aún no tienes tareas pendientes</h1> :
                    sortedToDos.map((toDo, index) => (
                        toDo.isEditing ? (
                            <Edit editToDo={editTask} task={toDo} />
                        ) : (
                            <ToDo task={toDo} key={index} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo} />
                        )
                    ))}
            </div>
        </div>

    )
}