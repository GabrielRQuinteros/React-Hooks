import { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
        const onMouseMove = ( {x, y}: {x:number, y:number} ) => {
            const coords = {x, y};
            setCoords( coords );
        };
        
        window.addEventListener('mousemove', onMouseMove );

      return () => {
        /// Me permite mostrar un mensaje
        // o hacer algo cuando el componente se destruye.
        // ACA PODRÍA DESTRUIR OBSERVABLES. PARA LO CUAL ES UTIL.
        window.removeEventListener( 'mousemove', onMouseMove );
      }
    }, [])
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify(coords) }
    </>
  )
}
