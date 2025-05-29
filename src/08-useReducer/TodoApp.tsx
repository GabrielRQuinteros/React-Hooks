import { useReducer } from "react";
import { todoReducer, type TodoState,TodoActionType, type Action } from './todoReducer';
import { TodoList } from "./TodoList/TodoList";
import { TodoAdd } from "./TodoAdd/TodoAdd";

export const TodoApp = () => {

    const initialState: TodoState[] = [
        {
            id: new Date().getTime(),
            description: 'Obtener la Piedra de la Realidad.',
            done: false,
        },
        {
            id: new Date().getTime()* 1.5 ,
            description: 'Obtener la Piedra del Alma',
            done: false,
        },
    ]

    const handleAddTodo = ( todo: TodoState ) => {
        const action: Action = {
            type: TodoActionType.ADD_TODO,
            payload: todo
        } 
        dispatchTodoAction(action);
    }
    
    const [todosStates, dispatchTodoAction] = useReducer( todoReducer, initialState );
  
    return (
        <>
            <h1>TodoApp: 10 <small>pandientes: 2</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todosStates} />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd addTodo={handleAddTodo} />
                </div>

            </div>
        </>
    );


}
