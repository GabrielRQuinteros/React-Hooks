import type React from "react"
import type { TodoState } from "../todoReducer";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ( {addTodo} ) => {
  
  const { description, onInputChange, onResetForm } = useForm({
          description:''
        });

   const onAddNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       if( description.trim().length === 0 ) return
        
       const newTodo: TodoState  = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        addTodo( newTodo );
        onResetForm();
   }
  
  return (
        <form onSubmit={onAddNewTodo}>
            <input  type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    onChange={onInputChange}
                    value={description}
                    />
            <button className="btn btn-primary mt-2"
                    type="submit">
                        Agregar 
            </button>
        </form>
  )
}
