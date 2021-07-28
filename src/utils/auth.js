const STORAGE_KEY = '@projetoreciclagem:token'
const USERDATA_KEY = '@projetoreciclagem:user'

const setUserData = userData => localStorage.setItem(USERDATA_KEY, userData)
const removeUserData = userData => localStorage.removeItem(USERDATA_KEY)


const isAdmin = () => {
    const isAdmin = localStorage.getItem(USERDATA_KEY)
    const data = JSON.parse(isAdmin)  
    if(data.isAdmin === true){
        return true;
    }else{
        return false;
    }   
}

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)
const login = token => localStorage.setItem(STORAGE_KEY, token)
const logout = () => localStorage.removeItem(STORAGE_KEY)


export { isLogged, login, logout, setUserData, removeUserData, isAdmin }