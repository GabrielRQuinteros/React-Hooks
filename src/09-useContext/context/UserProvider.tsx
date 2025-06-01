import { useState, type ReactNode } from "react"
import { UserContext } from "./UserContext"

/**
 * ¿Qué es el Provider?
 *  Cuando creas un Context, React te da un componente
 *  especial llamado Provider. Este componente:
 *  1- Se usa para envolver a los componentes que deben
 *  acceder a los datos del contexto.
 *  2- Tiene una prop llamada value,
 *  que es el dato que quieres compartir.
 */

/**
 * ¿Qué es el hook useContext?
 * El hook useContext se usa dentro de cualquier componente
 * que esté dentro del árbol del Provider,
 * y permite leer el valor del contexto directamente.
 */
// Children son los Elementos hijos ( HTML Elements y componentes )
// que estan en su interior de jerarquia mas proxima
//Ej: <UserContext>
//  <h1></h1>
//  <h2><hr/></h2>  
// </UserContext>
//Los children son solo el h1 y el h2, no el hr. El hr es un nieto.
// Ej: En el Componente Routes, los Route son children del Routes.


export const UserProvider = ( { children }: { children: ReactNode } ) => {
    
    const [user, setUser] = useState(null);
    
    return (
        // <UserContext.Provider value={{hola: 'Mundo', user}}  >
        <UserContext.Provider value={{ user, setUser }}  >
        {children}
    </UserContext.Provider>
  )
}

// const user: User = {
//     id: 123,
//     name: 'Gabriel Q',
//     email: 'GabrielQ@outlook.com'
// }

export interface User {
    id: number,
    name: string,
    email: string
} 