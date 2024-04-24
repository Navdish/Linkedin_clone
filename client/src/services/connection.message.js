import axios from 'axios'
const backend_url = process.env.REACT_APP_BACKEND_URL

export const fetchMessages = (data) => axios.get(`${backend_url}/message`, {params:{data}})