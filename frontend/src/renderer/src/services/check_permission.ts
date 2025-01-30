import axios from 'axios';

interface Permission {
  id: number;
  name: string;
  RolePermissions: {
    role_id: number;
    permission_id: number;
  };
}

export const fetchPermissionsByRoleId = async (roleId: number): Promise<string[]> => {
  try {
    const response = await axios.get<Permission[]>(`http://localhost:3870/permission/roles/${roleId}/permissions`);
    // Extrai os nomes das permissões
    console.log(response)
    return response.data.map((p) => p.name);
  } catch (error) {
    console.error('Erro ao buscar permissões:', error);
    return [];
  }
};

export const decodeToken = async(token: string): Promise<any> => {
  try{
    const response = await axios.get(`http://localhost:3870/login/${token}`);
    console.log(response)
    return response
  }catch(error: any){
    console.error('Erro ao buscar permissões:', error);
    return null;
  }
}
