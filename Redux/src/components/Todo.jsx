import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const Todos = useSelector(state => state.todo)
    const dispatch = useDispatch();

    return (

        <>
            <div>
                <div>Todos</div>
                <ul>
                    {Todos.map((todo) => (
                        <li key={todo.id}>
                            <div>{todo.text}</div>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todo