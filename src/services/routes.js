import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/index'
import DogPage from '../pages/DogPage/index'
import CatPage from '../pages/CatPage/index'
import Error from '../pages/Error/error'

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dogpage' element={<DogPage/>}/>
        <Route path='/catpage' element={<CatPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}

