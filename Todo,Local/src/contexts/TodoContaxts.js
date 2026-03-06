import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updatTodo: (id, todo) => {},
    deleteTodo:(id) => {},
    toggelComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext)

}

export const Todoprovider = TodoContext.Provider   