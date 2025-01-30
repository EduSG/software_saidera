// src/components/PermissionTable.tsx
import React, { useEffect, useState } from 'react';
import { getAllPermissions, deletePermission } from '../../services/role_permission';
import { TrashSimple } from 'phosphor-react';

const PermissionTable: React.FC = () => {
  const [permissions, setPermissions] = useState<any[]>([]);

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    const response = await getAllPermissions();
    setPermissions(response.data);
  };

  const handleDeletePermission = async (id: string) => {
    await deletePermission(id);
    fetchPermissions();
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">ID</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ddd]">{permission.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ddd]">{permission.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
