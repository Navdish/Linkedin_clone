import axios from 'axios'
const backend_url = process.env.REACT_APP_BACKEND_URL

export const fetchRequest = ()=> axios.get(`${backend_url}/connection/request`)
export const fetchUsers = ()=> axios.get(`${backend_url}/connection/user`)
export const postRequests = (data)=> axios.post(`${backend_url}/connection`, data)
export const UpdateRequests = ({connectionId, status})=> axios.put(`${backend_url}/connection?connectionId=${connectionId}&status=${status}`)