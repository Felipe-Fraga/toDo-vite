import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
    return (
        <div className={`flex m-4 border rounded p-2 bg-indigo-00 justify-between items-center ${task.completed ? 'bg-indigo-100 border-none text-indigo-900' : ''}`}>
            <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} className='pr-2' />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
            </div>
        </div>


    )
}