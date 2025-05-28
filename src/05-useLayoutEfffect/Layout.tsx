import { LoadingMessage } from "../03- examples/LoadingMessage";
import { PokemonCard } from "../03- examples/PokemonCard";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import type { PokemonInfo } from "../interfaces/PokemonInfo.interface";

export const Layout = () => {

  const { counter, increment, decrement } = useCounter(1);
  const url= `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, isLoading } = useFetch<PokemonInfo>(url);


  return (
    <>
        <h1>Información del Pokemon</h1>
        <hr />
        { isLoading?
            <LoadingMessage/>:
            <PokemonCard id ={data!.id}
                         name={data!.name}
                         sprites={[
                                data!.sprites.front_default,
                                data!.sprites.back_default,
                                data!.sprites.front_shiny,
                                data!.sprites.back_shiny,
                                ]  
                              }
              />
            
        }

        <button className="btn btn-primary mt-2"
                onClick={ () => counter > 0? decrement(1): null} >
                 Anterior
        </button>
        <button className="btn btn-primary mt-2"
                onClick={ () => increment(1)} >
                Siguiente
        </button>
        
        {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}
    </>
  )
}
