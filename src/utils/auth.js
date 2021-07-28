const STORAGE_KEY = '@projetoreciclagem:token'

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)
const login = token => localStorage.setItem(STORAGE_KEY, token)
const logout = () => localStorage.removeItem(STORAGE_KEY)

export { STORAGE_KEY, isLogged, login, logout }