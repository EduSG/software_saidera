import { useState } from 'react'

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    onLogin(email, password)
  }

  return (
    <form className='flex flex-col mt-5 w-[100%] items-center' onSubmit={handleSubmit}>
      <div className='flex flex-col w-[100%] items-center'>
        <div>
          <label className='text-slate-700' htmlFor="">Email:</label>
          <input
            type="text"
            name="email_input"
            id="email"
            value={email}
            className='flex items-center rounded h-10 w-[24rem] pl-2 mt-2 inputs_form'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='flex flex-col mt-8'>
          <label className='text-slate-700' htmlFor="">Senha:</label>
          <input
            type="text"
            name="password_input"
            id="password"

            className='flex items-center rounded h-10 w-[24rem] pl-2 mt-2 inputs_form'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button className='flex items-center rounded-[6px] h-10 w-[24rem] mt-8  bg-[#0adb8b] justify-center text-white font-bold'>Entrar</button>
    </form>
  )
}
