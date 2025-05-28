import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SipleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Strider',
        email: 'GQ@hotmail.com'
    });
    
    const {username, email}= formState;

    const onInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = event.target;
        setFormState( { ...formState, [name]:value} );
    };

    useEffect(() => {
        console.log('Form cambio');
    }, [formState]);
    
    useEffect(() => {
        console.log('Campo Email cambio');
    }, [email]);
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input  type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={onInputChange}
                 />
        <input  type="text"
                name="email"
                className="form-control mt-2"
                placeholder="Email"
                value={email}
                onChange={onInputChange}
                 />
    
    { (username === 'strider2') && <Message/> }
    </>
  )
}
