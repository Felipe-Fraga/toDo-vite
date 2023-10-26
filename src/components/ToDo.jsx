import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
    return (
        <div className={`flex m-4 border rounded p-2 justify-between items-center ${task.completed ? 'border-none text-indigo-900 dark:bg-gray-900 dark:text-indigo-400' : ''}`}>
            <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon
                    icon={task.completed ? faCheckSquare : faSquare}
                    onClick={() => toggleComplete(task.id)}
                    className={`pr-2 ${task.completed ? 'text-indigo-900 dark:text-indigo-400' : 'text-indigo-500 dark:text-indigo-300'}`}
                />
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} className='pr-2 text-indigo-500 dark:text-indigo-300' />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} className='text-indigo-500 dark:text-indigo-300' />
            </div>
        </div>
    );
}