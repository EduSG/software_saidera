import { Router, Route } from 'electron-router-dom'

import { Home } from '../pages/home'
import { Detail } from '../pages/detail'
import { About } from '../pages/about'
import { Create } from '../pages/create'
import { Layout } from '../components/layout'
import { Boxware } from '../pages/area_boxware'
import { Comercial } from '../pages/area_comercial'
import { Produtos } from '../pages/area_produtos'
import { Usuarios } from '../pages/usuarios'

export function Routes(){
  return(
    <Router
      main={
        <Route path="/" element={<Layout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/detail' element={<Detail/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/boxware' element={<Boxware/>} />
          <Route path='/comercial' element={<Comercial/>} />
          <Route path='/produtos' element={<Produtos/>} />
          <Route path='/usuarios' element={<Usuarios/>} />
        </Route>
      }

    />
  )
}




