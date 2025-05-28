import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    // const { formState, onInputChange, username, email, password } = useForm(
    //     {
    //         username: '',
    //         email: '',
    //         password: ''
    //     });
    // const { username, email, password }= formState;
    
    const { onInputChange, username, email, password, onResetForm } = useForm(
        {
            username: '',
            email: '',
            password: ''
        });

    

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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
    
        <input  type="password"
                name="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                value={password}
                onChange={onInputChange}
                 />

        <button className="btn btn-primary mt-2"
                onClick={onResetForm}>
                Borrar</button>

        
    </>
  )
}
