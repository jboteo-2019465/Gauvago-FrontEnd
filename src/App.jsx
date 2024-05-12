import { BrowserRouter as Router } from 'react-router-dom';
import { AuthPage } from "./Pages/Auth/AuthPage.jsx"
import {AppRoutes} from '../Routes.jsx';
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <AppRoutes />
      <Toaster position='bottom-right' reverseOrder={false}/>
    </>
  )
}

export default App
