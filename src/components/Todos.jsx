import React from 'react'

////////////////// Hook todos import ///////////////////
import useTodos from '../hooks/useTodos'
////////////////////////////////////////////////////////

const Todos = () => {
    ///////////////// Hook todos use its states //////////////////
    const initialTodos = [
        { id: 1, title: 'Edu hay que hacer el portafolio' },
        { id: 2, title: 'Tenemos que adelantar los cursos de las otras plataformas' },
        { id: 3, title: 'Y también vamos haciendo el e-commerce por componentes' }
    ]
    const [ todos, addTodo, deleteTodo ] = useTodos(initialTodos)
    //////////////////////////////////////////////////////////////

    return (
        <>
            {/* Hook todos validation */}
            <hr />
            <div>
                <p>Checking todos in order to use depending on your needs.</p>
                <button
                    onClick = { () => addTodo({ title: 'Nueva tarea' }) }>
                    Agregar
                </button>
                <ul>
                    { todos?.map(todo => (
                        <li key = { todo.id }>
                            { todo.title }
                            <button
                                onClick = { () => deleteTodo(todo.id) }>
                                Borrar
                            </button>
                        </li>
                    )) }
                </ul>
            </div>
        </>
    )
}

export default Todos
