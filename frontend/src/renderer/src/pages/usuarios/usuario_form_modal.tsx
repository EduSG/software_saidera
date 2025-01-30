import { useState, useEffect } from 'react';
import { getAllRoles, deleteRole } from '../../services/role_permission'

interface UserFormProps {
  onSubmit: (user: { name: string; email: string; role: string; tempPassword: string }) => void;
}


export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [tempPassword, setTempPassword] = useState('');
  const [roles, setRoles] = useState<any[]>([])


  useEffect(() => {
    fetchRoles()
  }, [])

  const fetchRoles = async () => {
    const response = await getAllRoles()
    const sanitized_response = response.data.map(role => role.name)
    setRoles(sanitized_response)
    console.log(roles)
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, role, tempPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Cadastrar Usuário</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          className="w-full px-4 py-2 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cargo</label>
        <select
          className="w-full px-4 py-2 border rounded-lg"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Selecione um cargo</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Senha Temporária</label>
        <input
          type="password"
          placeholder="Senha Temporária"
          className="w-full px-4 py-2 border rounded-lg"
          value={tempPassword}
          onChange={(e) => setTempPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            setName('');
            setEmail('');
            setRole('');
            setTempPassword('');
          }}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Limpar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Criar Usuário
        </button>
      </div>
    </form>
  );
}
