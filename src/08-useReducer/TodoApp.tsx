import { TodoList } from "./TodoList/TodoList";
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

    const { todosStates, todosCount, pendingTodosCount, handleAddTodo, handleDeleteTodo, handleToggleTodo } = useTodo([]);  

    return (
        <>
            <h1>TodoApp: {todosCount} <small>pandientes: {pendingTodosCount}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todosStates} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
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
