/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export interface TodoState {
    id: number,
    description: string,
    done: boolean,
}

export enum TodoActionType {
    ADD_TODO= "[TODO] addTodoAction",
    DELETE_TODO= "[TODO] deleteTodoAction",
    TOGGLE_TODO= "[TODO] toggleTodoAction",

}

export interface Action {
    type: string,
    payload?: unknown
}

export const todoReducer = ( state: TodoState[], action: Action ): TodoState[] => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return [...state, action.payload as TodoState];
        
        case TodoActionType.DELETE_TODO:
            return state.filter( todo => todo.id != (action.payload as number) );
        
        case TodoActionType.TOGGLE_TODO:
            return state.map( todo => {
                                        if (todo.id == (action.payload as number)) {
                                            return { ...todo, done: !todo.done }; 
                                        }
                                        return todo; 
                                    } );
        
        default:
            return state;
    }
}

