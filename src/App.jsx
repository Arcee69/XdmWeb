import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './routers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
