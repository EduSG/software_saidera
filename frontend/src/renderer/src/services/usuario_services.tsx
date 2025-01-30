
import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3870/' // Substitua pela URL do seu backend
})

export const createAcesso = (data: any) => api.post('/acesso', data)
export const getAcessoById = (id: string) => api.get(`/acesso/${id}`)
export const getAllAcessos = () => api.get('/acessos')
//export const updateAcesso = (id: string, data: any) => api.put(`/roles/${id}`, data)
//export const deleteAcesso = (id: string) => api.delete(`/roles/${id}`)

