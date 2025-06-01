import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import type { User } from "./context/UserProvider";

export const HomePage = () => {
  
  const {user} = useContext(UserContext) as {user: User};
  
  return (
    <>
        <h1>Home Page: <small> {user?.name}</small></h1>
        <hr />
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}
