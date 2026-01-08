
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hader from './command/Hader'
import Shop from './pages/Shop'
import NewShop from './pages/NewShop'
import Logen from './pages/Logen'

export default function App() {


  return (
    <>
      <BrowserRouter>
        <Hader></Hader>
        <Routes>
          <Route path='/'element={<Logen/>}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/Shop/NewShop/:pro' element={<NewShop/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}


