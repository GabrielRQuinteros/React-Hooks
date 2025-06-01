/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import type { User } from "./context/UserProvider";

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext) as {user: User, setUser: Function};
  
  const handleSetUser= () => {
    const newUser: User = {
      id: 123,
      name: 'Gabriel Q',
      email: 'GabrielQ@outlook.com'
    }
    setUser( newUser );
  }
  
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button className="btn btn-primary"
          onClick={handleSetUser}>
        Establecer Usuario
      </button>
      
    </>
  )
}
