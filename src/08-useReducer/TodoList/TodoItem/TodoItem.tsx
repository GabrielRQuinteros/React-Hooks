import type { TodoState } from "../../todoReducer"

export const TodoItem = ( {todo} : {todo: TodoState} ) => {
  return (
    <li className="list-group-item d-flex justify-content-between" key={todo.id}  >
        <span className="align-self-center" >{todo.description}</span>
        <button className="btn btn-danger" >Borrar</button>
    </li>
  )
}
