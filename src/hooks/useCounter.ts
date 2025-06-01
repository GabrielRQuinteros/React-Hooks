import { useState } from "react"


export const useCounter = (
    start: number = 0
) => {

    const [counter, setCounter] = useState(start);

    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value );
    };

    const decrement = ( value = 1 ) => {
        setCounter( (current) => current - value );
    }

    const reset = () => {
        setCounter(start);
    }


    return {
        counter,
        increment,
        decrement,
        reset
    };

}
