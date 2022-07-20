import axios from 'axios'

const serviceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
})

export default serviceAxios
