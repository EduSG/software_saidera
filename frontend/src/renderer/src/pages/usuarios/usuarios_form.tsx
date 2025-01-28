import { useState } from 'react'
import { ArrowUp, ArrowDown, ArrowsOutLineVertical } from 'phosphor-react'
import UserModal from '../../components/modal/modal'
import UserForm from './usuario_form_modal'

interface User {
  id: number
  name: string
  email: string
  role: string
  joined: string
  lastLogin: string
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState<keyof User>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data baseado na imagem fornecida
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Sadie E',
      email: '',
      role: 'SiteAdmin',
      joined: '12/14/2016',
      lastLogin: '12/14/2023'
    },
    {
      id: 2,
      name: 'Christina',
      email: 'content@example.com',
      role: 'ContentMgr',
      joined: '12/16/2016',
      lastLogin: '12/16/2023'
    }
  ])

  const handleCreateUser = (newUser: {
    name: string
    email: string
    role: string
    tempPassword: string
  }) => {
    const user = {
      id: users.length + 1,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      joined: new Date().toLocaleDateString(),
      lastLogin: '-'
    }
    setUsers([...users, user])
    setIsModalOpen(false)
  }

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    const compareValue = a[sortField].localeCompare(b[sortField])
    return sortDirection === 'asc' ? compareValue : -compareValue
  })

  const filteredUsers = sortedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Seção Superior */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Usuários</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Pesquisar usuários..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Criar Usuário
          </button>
        </div>
      </div>

      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserForm onSubmit={handleCreateUser} />
      </UserModal>

      {/* Tabela */}
      <div className="rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {['name', 'email', 'role', 'joined', 'lastLogin'].map((field) => (
                  <th
                    key={field}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort(field as keyof User)}
                  >
                    <div className="flex items-center gap-1">
                      {
                        {
                          name: 'Nome',
                          email: 'Email',
                          role: 'Cargo',
                          joined: 'Data de Adição',
                          lastLogin: 'Último Login'
                        }[field]
                      }
                      {sortField === field ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        )
                      ) : (
                        <ArrowsOutLineVertical className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.joined}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                    <button className="text-blue-500 hover:text-blue-600">Editar</button>
                    <button className="text-red-500 hover:text-red-600">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
