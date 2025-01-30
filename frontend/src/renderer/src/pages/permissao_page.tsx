import React from 'react';
import RoleTable from './permission/role_table';
import PermissionTable from './permission/permission_table';
import RolePermissionsManager from './permission/permission_role';

const PermissaoPage: React.FC = () => {

  return (
    <div className="container mx-auto p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Roles</h1>
      <RoleTable />
      <h1 className="text-2xl font-bold mt-8 mb-4">Permissions</h1>
      <PermissionTable />
      <RolePermissionsManager />
    </div>
  );
};

export default PermissaoPage;
