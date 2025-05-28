import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Padre } from './07-memo-tarea/Padre'
// import HooksApp from './pages/HooksApp.tsx'
// import { SipleForm } from './02-useEffect/SipleForm.tsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.tsx'
// import { MultipleCustomHooks } from './03- examples/MultipleCustomHooks.tsx'
// import { FocusScreen } from './04-useRef/FocusScreen.tsx'
// import { Layout } from './05-useLayoutEfffect/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <SipleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    <Padre/>
  </StrictMode>
)
