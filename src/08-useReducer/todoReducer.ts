/* eslint-disable @typescript-eslint/no-unsafe-function-type */
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

export const todoReducer = ( state: TodoState[], action: Action ): TodoState[] => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return [...state, action.payload as TodoState];
        default:
            return state;
    }
}


