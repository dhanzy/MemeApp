import { FetchOptions } from "../interface/fetchOption"


export const register = async(firstname: string, lastname: string, username: string, email: string, password: string) => {
    const fetchOptions: FetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            user: {
                first_name: firstname, 
                last_name: lastname, 
                username: username, 
                email: email, 
                password: password,
                is_admin: false
            }
        }),
        credentials: "include"
    }
    return await fetch('/auth/users/',  fetchOptions)
        .then((res) => res.json())
        .catch((error) => ({
            error: { message: `Unable to connect to server. try again ${error.message}` }
        }))
}



export const loadUser = async(token: string) => {
    const fetchOption: FetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        credentials: 'include'
    }
    return await fetch('/auth/users/me/', fetchOption)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: "Unable to connect to server. Please try again"}
        }))
}


export const login = async(username: string, password: string) => {
    const fetchOptions: FetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
    }
    return await fetch('/auth/token/login/', fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: "Unable to connect to server. Please try again" }
        }))
}



export const logout = async() => {
    const fetchOptions: FetchOptions = {
        method: "POST",
        credentials: 'include'
    }
    return await fetch('//', fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
}