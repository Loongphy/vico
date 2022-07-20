import axios from 'axios'

axios.defaults.timeout = 3000
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
export default axios
