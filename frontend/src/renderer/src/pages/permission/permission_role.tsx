import React, { useEffect, useState } from 'react';
import {
  getAllRoles,
  getAllPermissions,
  getPermissionsByRoleId,
  addPermissionToRole,
  removePermissionFromRole,
} from '../../services/role_permission';

const RolePermissionsManager: React.FC = () => {
  const [roles, setRoles] = useState<any[]>([]);
  const [permissions, setPermissions] = useState<any[]>([]);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [rolePermissions, setRolePermissions] = useState<any[]>([]);

  // Busca todas as roles e permissões ao carregar o componente
  useEffect(() => {
    fetchRoles();
    fetchPermissions();
  }, []);

  // Busca as permissões da role selecionada
  useEffect(() => {
    if (selectedRole) {
      fetchRolePermissions(selectedRole);
    }
  }, [selectedRole]);

  const fetchRoles = async () => {
    const response = await getAllRoles();
    setRoles(response.data);
  };

  const fetchPermissions = async () => {
    const response = await getAllPermissions();
    setPermissions(response.data);
  };

  const fetchRolePermissions = async (roleId: string) => {
    const response = await getPermissionsByRoleId(roleId);
    setRolePermissions(response.data);
  };

  const handleAddPermission = async (permissionId: string) => {
    if (selectedRole) {
      await addPermissionToRole({ roleId: selectedRole, permissionId });
      fetchRolePermissions(selectedRole); // Atualiza a lista de permissões
    }
  };

  const handleRemovePermission = async (permissionId: string) => {
    if (selectedRole) {
      await removePermissionFromRole({ roleId: selectedRole, permissionId });
      fetchRolePermissions(selectedRole); // Atualiza a lista de permissões
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Permissões de Roles</h1>

      {/* Lista de Roles */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Selecione uma Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedRole === role.id ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'
              }`}
            >
              <h3 className="text-lg font-medium">{role.name}</h3>
              <p className="text-sm text-gray-600">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Permissões Disponíveis */}
      {selectedRole && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Permissões Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {permissions
              .filter((permission) => !rolePermissions.some((rp) => rp.id === permission.id))
              .map((permission) => (
                <div
                  key={permission.id}
                  className="p-4 border rounded-lg bg-white border-gray-200"
                >
                  <h3 className="text-lg font-medium">{permission.name}</h3>
                  <p className="text-sm text-gray-600">{permission.description}</p>
                  <button
                    onClick={() => handleAddPermission(permission.id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Adicionar
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Permissões da Role Selecionada */}
      {selectedRole && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Permissões da Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rolePermissions.map((permission) => (
              <div
                key={permission.id}
                className="p-4 border rounded-lg bg-white border-gray-200"
              >
                <h3 className="text-lg font-medium">{permission.name}</h3>
                <p className="text-sm text-gray-600">{permission.description}</p>
                <button
                  onClick={() => handleRemovePermission(permission.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RolePermissionsManager;
