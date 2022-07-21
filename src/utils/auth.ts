const ACCESS_TOKEN_KEY = 'accessToken'
const REFRESH_TOKEN_KEY = 'refreshToken'

const setToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
}

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}
export { setToken, setAccessToken, getAccessToken, getRefreshToken }
