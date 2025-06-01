import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {

  return (
    <UserProvider>
      <h1>Main App</h1>
      <NavBar/>
      <hr />
      <Routes>
        <Route path="/login" element= {<LoginPage/>} />
        <Route path="/" element= {<HomePage/>} />
        <Route path="/about" element= {<AboutPage/>} />
        
        {/* Lo que esta abajo es la ruta por defecto
          si no matchea con ninguna otra ruta mensionada se redirige por defecto
          a esta pagina de abajo es como el  /** de Angular */}
        {/* <Route path="/*" element= {<AboutPage/>} /> */}
        
        {/* LA MEJOR FORMA ES LA DE ABAJO */}
        {/* Esta forma de abajo es lo mismo que la de arriba */}
        {/* Porque es la mejor? => Porque te cambia el Link de la ruta
            a la del About, no te deja la ruta inexistente en la URL del navegador */}
        <Route path="/*" element= { <Navigate to="/about" /> } />
        
      </Routes>
      
    </UserProvider>
  );
}
