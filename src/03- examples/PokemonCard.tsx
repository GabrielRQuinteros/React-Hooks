import { useLayoutEffect, useRef } from "react"

/// HOOK --> "useLayoutEffect"
/// ----------------------------
// El hook useLayoutEffect en React sirve para ejecutar efectos sincrónicos
// justo después del renderizado del DOM,
// pero antes de que el navegador pinte la pantalla.
// En otras palabras:
// useLayoutEffect se ejecuta inmediatamente después del render, antes de que el usuario vea algo.


export const PokemonCard = ({id, name, sprites=[]}: {id:number, name:string, sprites: string[]}) => {
    
    const h2Ref = useRef<HTMLHeadingElement>(null);
    useLayoutEffect(() => {
        const { height, width } = h2Ref.current!.getBoundingClientRect();
        console.log( {height, width} )
    }, [name])
  
    return (
    <section style={{height:200}} >
        <h2 className="text-capitalize"
            ref={h2Ref}
            >#{id} - {name}</h2>
        {/* Imagenes */}
        <div>
            { sprites.map( url=> <img key={url} src={url} alt={name} /> ) }
        </div>
    </section>
  )
}
