import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import HooksApp from './pages/HooksApp.tsx'
// import { SipleForm } from './02-useEffect/SipleForm.tsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.tsx'
// import { MultipleCustomHooks } from './03- examples/MultipleCustomHooks.tsx'
// import { FocusScreen } from './04-useRef/FocusScreen.tsx'
// import { Layout } from './05-useLayoutEfffect/Layout.tsx'
// import './08-useReducer/intro-reducer'
// import { Padre } from './07-memo-tarea/Padre'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
        {/* <HooksApp /> */}
        {/* <SipleForm/> */}
        {/* <FormWithCustomHook/> */}
        {/* <MultipleCustomHooks/> */}
        {/* <FocusScreen/> */}
        {/* <Layout/> */}
        {/* <Padre/> */}
        {/* <TodoApp/> */}
        <MainApp/>
    </BrowserRouter>
  </StrictMode>
  
)
