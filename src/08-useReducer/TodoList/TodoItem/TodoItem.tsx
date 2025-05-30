import type { TodoState } from "../../todoReducer"

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const TodoItem = ( {todo, onDeleteTodo, onToggleTodo } : {todo: TodoState, onDeleteTodo: Function, onToggleTodo: Function } ) => {
  return (
    <li className="list-group-item d-flex justify-content-between" key={todo.id}  >
        <span 
              className={`align-self-center 
                ${ todo.done?'text-decoration-line-through':''}` }
              onClick={ () => onToggleTodo(todo.id) }
              >{todo.description}
        </span>
        <button className="btn btn-danger" onClick={ () => onDeleteTodo(todo.id) } >Borrar</button>
    </li>
  )
}
