import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react';

describe('Tests del Custom Hook useCounter', () => {
  
    test('01-A Prueba se inicializa Correctamente', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;
        
        expect( counter ).toBe(0);
        expect( increment ).toEqual( expect.any(Function) );
        expect( decrement ).toEqual( expect.any(Function) );
        expect( reset ).toEqual( expect.any(Function) );
    });
    
    test('01-B Prueba se inicializa Correctamente', () => {
        const { result } = renderHook( () => useCounter(5) );
        // const { counter, increment, decrement, reset } = result.current;
        const { counter } = result.current;
        expect( counter ).toBe(5);
    });


    
    test('02- Prueba se incrementa correctamente', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;
        //! TEST: Test contra el cambio de un State en React
        // Es necesario envolver la funcion que cambia el valor del state en una
        // funciton act()
        // Ejemplo abajo:
        act(() => {
            increment(5);
            increment(3);
        } );
        expect( result.current.counter ).toBe(8);
    });
    
    
    test('03- Prueba se decrementa Correctamente', () => {
        const { result } = renderHook( () => useCounter(5) );
        const { decrement } = result.current;
        act(() => {
            decrement(4);
            decrement(7);
        } );
        expect( result.current.counter ).toBe(-6);
    });
    
    
    test('04- Prueba se resetea Correctamente', () => {
      const { result } = renderHook( () => useCounter(5) );
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            reset();            
        } );
        expect( result.current.counter ).toBe(5);
    });
    

})
