/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/*
export interface TodoState {
    id: number,
    description: string,
    done: boolean,
}

export enum TodoActionType {
    ADD_TODO= "[TODO] addTodoAction",
}

export interface Action {
    type: string,
    payload?: unknown
}



export const todoInitialState: TodoState[] = [
    {id: 1, description: 'Obtener la piedra del infinito.', done: false}
];

export const todoReducer = ( state: TodoState[]= todoInitialState, action: Action ): TodoState[] => {

    if( action.type === TodoActionType.ADD_TODO ) {
        //! NUNCA HACER:
        //state.push(action.payload as TodoState);
        // RAZON: El agregar el state asi hace que React no pueda detectar el cambio en el Array a la hora de Re-Renderizar componentes.
        // Por lo tanto, produce que no se dispare la re-renderizacion al mutar y no reasignar.
 
        /// ESTA CASI PROHIBIDO USAR "PUSH" con Reducers y casi siempre en React.
        /// La forma que mas se usa es la de abajo, con spread.
        return [...state, action.payload as TodoState];
    }


    return state;
}


const newTodoPayload: TodoState = {
    id: 2,
    description: 'Obtener la piedra del tiempo',
    done: false
    
}

// Nombre que respeta la convencion de como deben llamarse los Action/Acciones
// que se le pasan a los reducer.
export const addTodoAction = {
    type: TodoActionType.ADD_TODO,
    payload: newTodoPayload // Este es el nombre por convension que se le da a los datos adicionales de un action.
}

console.log ( todoReducer( todoInitialState, addTodoAction ) );
*/
