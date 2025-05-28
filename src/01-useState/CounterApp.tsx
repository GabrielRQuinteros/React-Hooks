import { useState } from "react"

export const CounterApp = (
    //  { start= 0, step= 1, max, min }:
    //  { start?: number, step?:number, max?: number, min?: number }
    
    
    ) => {

    // const [ counter, setCounter ] = useState( start );
    
    // if( step < 0 )
    //     throw new Error('El parámetro step debe ser positivo.');
    // if( min && start < min )
    //     throw new Error('El valor start no debe ser menor que el valor mínimo.');
    // if( max && start > max )
    //     throw new Error('El valor start no debe ser mayor que el valor máximo.');


    // const add = () => {
    //     let newValue: number = counter + step;
    //     if ( max && newValue > max )
    //         newValue = max;

    //     setCounter( newValue );
    // }
    // const reduce = () => {
    //     let newValue: number = counter - step;
    //     if ( min && newValue < min )
    //         newValue = min;
    //     setCounter( newValue );
    // }
        const initialState = {
            counter1: 10,
            counter2: 20,
            counter3: 30,
        }

        const [ state, setState ] = useState( initialState );

        const add = () => {
            const newState = {
                ...state,
                counter1: state.counter1 + 1,
            }
            setState( newState );
        }

    return (
        <>
            <h1>Counter1: {state.counter1}</h1>
            <h1>Counter2: {state.counter2}</h1>
            <h1>Counter3: {state.counter3}</h1>
            <hr/>
            <button onClick={add} className="btn btn-secondary"> +1 </button>
            {/* <button onClick={add}> +{step} </button> */}
            {/* <button onClick={reduce} > -{step} </button> */}
        </>
    );
}
