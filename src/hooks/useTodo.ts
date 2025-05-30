import { useEffect, useReducer } from "react";
import { TodoActionType, todoReducer, type Action, type TodoState } from "../08-useReducer/todoReducer";

const loadStateFromLocalStorage = (): TodoState[] => {
    const todosFromStorageStr: string | null = localStorage.getItem('todos');
    if( ! todosFromStorageStr ) return [];
    return (JSON.parse(todosFromStorageStr)) as TodoState[];
}

export const useTodo = ( initialState: TodoState []) => {
  
    const [todosStates, dispatchTodoAction] = useReducer( todoReducer, initialState, loadStateFromLocalStorage );
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todosStates));
    }, [todosStates] );
    

    const handleAddTodo = ( todo: TodoState ) => {
        const action: Action = {
            type: TodoActionType.ADD_TODO,
            payload: todo
        } 
        dispatchTodoAction(action);
    }

    const handleDeleteTodo = ( id: number ) => {
        const action: Action = {
            type: TodoActionType.DELETE_TODO,
            payload: id
        }
        dispatchTodoAction( action );
    }

    const handleToggleTodo = ( id: number ) => {
        const action: Action = {
            type: TodoActionType.TOGGLE_TODO,
            payload: id
        }
        dispatchTodoAction( action );
    }

    const todosCount = todosStates.length;
    const pendingTodosCount = todosStates.filter(t => !t.done).length;

    return {
            todosStates,
            handleAddTodo,
            handleDeleteTodo,
            handleToggleTodo,
            todosCount,
            pendingTodosCount,
    };
}
