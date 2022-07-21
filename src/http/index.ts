import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAccessToken } from '~/utils/auth'

if (import.meta.env.VITE_API_BASE_URL)
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

/**
 * Response Body Content, you can overwrite your own logic
 */
interface HttpResponse<T=unknown> {
  code: number
  msg: string
  data: T
}

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const access_token = getAccessToken()
  if (access_token) {
    if (!config.headers)
      config.headers = {}
    config.headers.Authorization = `Bearer ${access_token}`
  }
  return config
}, (error) => {
  // do something
  return Promise.reject(error)
})

axios.interceptors.response.use((response: AxiosResponse<HttpResponse>) => {
  const res = response.data
  // if the custom code is not 0, it is judged as an error
  if (res.code !== 0) {
    // do something
  }
  return res
}, (error) => {
  // do something
  return Promise.reject(error)
})

export default axios
