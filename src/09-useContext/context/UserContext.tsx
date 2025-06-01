import { createContext } from "react";

/**
 * ¿Qué es el Context en React?
 * El Context es una herramienta que permite compartir datos entre
 * componentes sin tener que pasarlos manualmente por props
 * en cada nivel del árbol de componentes.

Tiene una prop llamada value, que es el dato que quieres compartir.
 * Para que creamos el User COntext? Para 3 cosas:
 * 1- Saber como luce la informacion que vamos a colocar en el contexto
 * 2- Para que el Hook de React busque este contexto
 * 3- Para definir el Provider
 */
export const UserContext: React.Context<object> = createContext({});