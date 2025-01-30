import React, { useEffect, useState } from 'react'
import { getAllRoles, deleteRole } from '../../services/role_permission'
import { TrashSimple } from 'phosphor-react'

const RoleTable: React.FC = () => {
  const [roles, setRoles] = useState<any[]>([])

  useEffect(() => {
    fetchRoles()
  }, [])

  const fetchRoles = async () => {
    const response = await getAllRoles()
    console.log(response)
    setRoles(response.data)
  }

  const handleDeleteRole = async (id: string) => {
    await deleteRole(id)
    fetchRoles()
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ddd]">{role.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ddd]">{role.name}</td>
              <td className="pl-[38px] py-4  whitespace-no-wrap border-b border-[#ddd]">
                <button
                  onClick={() => handleDeleteRole(role.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashSimple className='w-[28px]' size={32} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RoleTable
