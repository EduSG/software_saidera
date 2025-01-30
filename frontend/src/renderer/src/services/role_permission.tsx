import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3870/permission' // Substitua pela URL do seu backend
})

export const createRole = (data: any) => api.post('/roles', data)
export const getRoleById = (id: string) => api.get(`/roles/${id}`)
export const getAllRoles = () => api.get('/roles')
export const updateRole = (id: string, data: any) => api.put(`/roles/${id}`, data)
export const deleteRole = (id: string) => api.delete(`/roles/${id}`)

export const createPermission = (data: any) => api.post('/permissions', data)
export const getPermissionById = (id: string) => api.get(`/permissions/${id}`)
export const getAllPermissions = () => api.get('/permissions')
export const updatePermission = (id: string, data: any) => api.put(`/permissions/${id}`, data)
export const deletePermission = (id: string) => api.delete(`/permissions/${id}`)

export const addPermissionToRole = (data: any) => api.post('/role-permissions', data)
export const removePermissionFromRole = (data: any) => api.delete('/role-permissions', { data })
export const getPermissionsByRoleId = (roleId: string) => api.get(`/roles/${roleId}/permissions`)
export const getRolesByPermissionId = (permissionId: string) =>
  api.get(`/permissions/${permissionId}/roles`)
