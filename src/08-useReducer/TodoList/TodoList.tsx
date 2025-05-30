/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import type { TodoState } from "../todoReducer";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodoList = (  {todos, onDeleteTodo, onToggleTodo }: {todos: TodoState[], onDeleteTodo: Function, onToggleTodo: Function } ) => {
    return (
    <ul className="list-group" >
        { todos.map( td => {return (<TodoItem key={td.id} todo={td} onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } />)}) }
    </ul>
  );
}
