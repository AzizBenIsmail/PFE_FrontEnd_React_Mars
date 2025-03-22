import axios from 'axios'

const apiurl = 'http://localhost:5000/users'


//crud 
export async function getAllUsers() {
    return await axios.get(`${apiurl}/getAllUsers`)
}

export async function deleteUserById(id) {
    return await axios.delete(`${apiurl}/deleteUser/${id}`)
}

export async function addUser(userData) {
    return await axios.post(`${apiurl}/addUser`,userData)
}

export async function updateUser(userData,idUser) {
    return await axios.put(`${apiurl}/updateUser/${idUser}`,userData)
}

export async function login(userData) {
    return await axios.post(`${apiurl}/login`,userData)
}