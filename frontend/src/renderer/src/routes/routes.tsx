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
import { LoginPage } from '../pages/login_page'
import { Navigate } from 'react-router-dom'
import PermissaoPage from '../pages/permissao_page'

export function Routes() {
  const isAuthenticated = !!localStorage.getItem('token')
  return (
    <Router
      main={
        <>
          {!isAuthenticated && (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" />} />{' '}
            </>
          )}

          {isAuthenticated && (
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route path="/boxware" element={<Boxware />} />
              <Route path="/comercial" element={<Comercial />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/permissao" element={<PermissaoPage />} />
              <Route path="*" element={<Navigate to="/" />} />{' '}
            </Route>
          )}
        </>
      }
    />
  )
}
