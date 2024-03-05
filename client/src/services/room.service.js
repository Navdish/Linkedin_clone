import axios from 'axios'
const backend_url = process.env.REACT_APP_BACKEND_URL

export const createRooms = (data)=> axios.post(`${backend_url}/room`, data)
export const fetchRooms = ()=> axios.get(`${backend_url}/room`)