import { useRef } from "react";

/**
 * Aca bamos a aprender el uso de useRef()
 * UseRef
 * -------
 * Es un hook de react que permite manejar el valor de una variable
 * pero sin detonar re-renderizaciones en pantalla.
 * Osea, es como un "useState()", pero que no desencadena
 * actualizaciones en pantalla del componente.
 */
export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onClickFocus = () => {
        // document.querySelector('input')?.focus();
        inputRef.current?.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input  ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
        <button className="btn btn-primary mt-2"
                onClick={onClickFocus}>
            Set Focus
        </button>
    </>
  )
}
