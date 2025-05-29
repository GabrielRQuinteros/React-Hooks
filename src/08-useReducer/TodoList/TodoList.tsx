
import type { TodoState } from "../todoReducer";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodoList = (  {todos}: {todos: TodoState[]} ) => {
    return (
    <ul className="list-group" >
        { todos.map( td => {return (<TodoItem key={td.id} todo={td} />)}) }
    </ul>
  );
}
