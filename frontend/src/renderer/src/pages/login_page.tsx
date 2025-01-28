import { LoginForm } from '../components/login/login_form'
import '../styles/login.css'
import blob from '../assets/blob.svg'
import grupo_software from '../assets/grupo.webp'

const handleLogin = async (username: string, password: string) => {}

export function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${blob})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh' // Exemplo de altura
      }}
      className="flex h-screen justify-center"
    >
      <div
        id="wrapper_header_form"
        className="rounded-xl flex flex-col items-center mt-40 shadow-sky-50 bg-white w-[40%] h-[500px] px-4 pt-8"
      >
        <div className='w-[50%]'>
          <img src={grupo_software} alt="" />
        </div>
        <h1 className="flex w-32 items-center justify-center font-bold text-slate-900 text-2xl">
          Login SFS
        </h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  )
}
