import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe('Prueba- Custom Hook useForm', () => {
  
    const initForm = {
        name: 'Gabriel',
        email: 'testGabriel@gmail.com'
    }

    const initExpectedResult = {
          name: initForm.name,
          email: initForm.email,
          formState: initForm,
          onInputChange: expect.any(Function),
          onResetForm: expect.any(Function)
    }

    const mockEventNameChange: React.ChangeEvent<HTMLInputElement> = {
                                target: {
                                  name: 'name',
                                  value: 'Juan'
                                }
                              } as React.ChangeEvent<HTMLInputElement>;
    const mockEventEmailChange: React.ChangeEvent<HTMLInputElement> = {
                                target: {
                                  name: 'email',
                                  value: 'test-change@gmail.com'
                                }
                              } as React.ChangeEvent<HTMLInputElement>;


    test('01- Test - Debe regresar los valores por defecto.', () => {
      const { result } = renderHook(() => useForm( initForm ));
      expect( result.current ).toEqual( initExpectedResult );
    })
    
    test('02- Test - El OnInputChange debe cambiar el valor de un input del formulario', () => {
            const { result } = renderHook(() => useForm( initForm ));
            const {onInputChange} = result.current;
            
            // Mockeo el cambio de name y el cambio de Email
            act(() => onInputChange(mockEventNameChange));
            act(() => onInputChange(mockEventEmailChange));
            
            // Hago el assert para saber si cambiaron
            expect(result.current.name).toBe('Juan');
            expect(result.current.formState.name).toBe('Juan');
            expect(result.current.email).toBe('test-change@gmail.com');
            expect(result.current.formState.email).toBe('test-change@gmail.com');
    });



    test('03- Test - Reset al valor inicial del formulario luego de cambiar sus valores', () => {
            const { result } = renderHook(() => useForm( initForm ));
            const {onInputChange, onResetForm} = result.current;
            
            // Mockeo el cambio de name y el cambio de Email
            act(() => onInputChange(mockEventNameChange));
            act(() => onInputChange(mockEventEmailChange));
            
            // Mokeo el Reset del formulario
            act(() => onResetForm());
            
            // Hago el assert para saber si cambiaron
            expect(result.current.name).toBe(initForm.name);
            expect(result.current.formState.name).toBe(initForm.name);
            expect(result.current.email).toBe(initForm.email);
            expect(result.current.formState.email).toBe(initForm.email);
    });
    


})
